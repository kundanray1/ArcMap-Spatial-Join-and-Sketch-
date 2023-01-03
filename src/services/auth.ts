import { logout as logoutUser } from 'api/auth';
import { ACCESS_TOKEN, EXPIRES_IN, REFRESH_TOKEN } from 'constants/common';
import routes from 'constants/routes';

interface PersistParams {
  token: string;
  refreshToken: string;
  expiryTime: number;
}

/**
 * Persist token to storage.
 *
 * @param {{accessToken, refreshToken}} params
 */
export function persist({ token, refreshToken, expiryTime }: PersistParams) {
  setAccessToken(token);
  setRefreshToken(refreshToken);
  setExpiryTime(expiryTime);
}

/**
 * Get access token from storage.
 *
 * @returns {string}
 */
export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN);
}
/**
 * Get logged in user info from storage.
 *
 * @returns {object}
 */
export function getUserInfo() {
  let data = localStorage.getItem('persist:auth') ?? '';
  let parsedData = JSON.parse(data);
  if (data) {
    let user = JSON.parse(parsedData.user);
    return user;
  } else {
    return null;
  }
}

/**
 * Set access token to storage.
 *
 * @param {string} accessToken
 */
export function setAccessToken(accessToken: string) {
  localStorage.setItem(ACCESS_TOKEN, accessToken);
}

/**
 * Set expiry time for access token to storage.
 *
 * @param {number} expiryTime
 */
export function setExpiryTime(expiry: number) {
  //convert second to millisecond and add to current date.
  let expireTime = Date.now() + expiry * 1000;
  localStorage.setItem(EXPIRES_IN, expireTime.toString());
}

/**
 * Get refresh token from storage.
 *
 * @returns {string}
 */
export function getRefreshToken() {
  return localStorage.getItem(REFRESH_TOKEN);
}

/**
 * Get expiry time for access token to storage.
 *
 * @returns {number} expiryTime
 */
export function getExpiryTime() {
  let expiryTime = localStorage.getItem(EXPIRES_IN);
  return Number(expiryTime);
}

/**
 * Set refresh token to storage.
 *
 * @param {string} refreshToken
 * @returns {string}
 */
export function setRefreshToken(refreshToken: string) {
  return localStorage.setItem(REFRESH_TOKEN, refreshToken);
}

/**
 * Log out of the system.
 *
 */
export async function logout() {
  const refreshToken = await getRefreshToken();
  //log out user
  logoutUser(refreshToken || '');
  //do not clear language from local storage.
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('persist:auth');

  window.location.href = routes.auth.login;
}
