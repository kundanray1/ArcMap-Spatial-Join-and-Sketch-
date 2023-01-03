import http from 'utils/http';

export function login(data: any) {
  return http({
    url: '/auth/login',
    method: 'post',
    data: data,
  });
}

export function logout(refreshToken: string) {
  return http({
    url: '/auth/logout',
    method: 'post',
    data: { refresh_token: refreshToken },
  });
}

export function forgotPassword(data: any) {
  return http({
    url: '/auth/forgot-password',
    method: 'post',
    data: data,
  });
}

export function changePassword(data: any, headers: any) {
  return http({
    url: '/password/change/',
    method: 'post',
    data: data,
    headers,
  });
}

export function resetPassword(query: any, data: any) {
  return http({
    url: `/auth/reset-password/${query?.uid}/${query?.token}`,
    method: 'post',
    data: data,
  });
}

export function setPassword(query: any, data: any) {
  return http({
    url: `/auth/on-boarding/${query?.uid}/${query?.token}`,
    method: 'post',
    data: data,
  });
}

export function setNewPassword(data: any) {
  return http({
    url: '/set-password',
    method: 'post',
    data: data,
  });
}

export function verifyEmail(data: any) {
  return http({
    url: '/verify-email',
    method: 'post',
    data: data,
  });
}

export function getUser(uid: string) {
  return http({
    url: `/get-user/${uid}`,
    method: 'get',
  });
}
