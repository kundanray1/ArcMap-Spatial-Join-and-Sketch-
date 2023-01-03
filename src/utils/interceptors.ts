import { AxiosError, AxiosResponse } from 'axios';
import HttpStatus from 'http-status-codes';
import * as authService from '../services/auth';
import http from './http';

const RETRY_COUNT_LIMIT = 3;
const AUTHORIZATION_HEADER = 'Authorization';
const SESSION_EXPIRE = 'Invalid token.';

/**
 * Build authorization header
 *
 * @param {string} accessToken
 * @returns {string}
 */
function buildAuthHeader(accessToken: string) {
  return `Bearer ${accessToken}`;
}

/**
 * Interceptor to add authentication header for all requests.
 *
 * @param {object} request
 * @returns {object}
 */
export function requestInterceptor(request: any) {
  const accessToken = authService.getAccessToken();

  if (accessToken && !request.headers[AUTHORIZATION_HEADER]) {
    request.headers[AUTHORIZATION_HEADER] = buildAuthHeader(accessToken);
  }

  return request;
}

/**
 * Success response Interceptor for refresh token.
 *
 * @param sucess
 * @returns {object}
 */
export async function responseSuccessInterceptor(response: AxiosResponse) {
  let originalRequest = response.config;

  if (originalRequest.url === '/auth/refresh' && response.status === 200) {
    let accessToken = response.data.access;
    let refreshToken = response.data.refresh;
    let expiryTime = response.data.expires_in;

    authService.persist({ token: accessToken, refreshToken, expiryTime });
  }

  return response;
}

/**
 * Interceptor to refresh access token.
 *
 * @param {object} error
 * @returns {object}
 */
export async function responseErrorInterceptor(error: AxiosError) {
  if (!error.response) {
    return Promise.reject(error);
  }

  const originalRequest = error.config as any;
  const {
    status: code,
    // data: { detail: message },
  } = error.response;

  if (
    code === HttpStatus.UNAUTHORIZED &&
    // message === HttpStatus.getStatusText(HttpStatus.UNAUTHORIZED)
    //  &&
    !originalRequest.__isRetryRequest
  ) {
    originalRequest._retry = true;
    originalRequest.retryCount = isNaN(originalRequest.retryCount)
      ? 1
      : originalRequest.retryCount++;

    return http.request(originalRequest);
  }

  if (
    code === HttpStatus.UNAUTHORIZED ||
    // && message === SESSION_EXPIRE
    originalRequest.retryCount > RETRY_COUNT_LIMIT
  ) {
    await authService.logout();
  }

  return Promise.reject(error);
}
