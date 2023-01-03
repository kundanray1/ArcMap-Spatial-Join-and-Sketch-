/* eslint-disable import/no-anonymous-default-export */
import { AuthAction, AuthActionTypes } from 'actions/data/auth';

const INITIAL_STATE = {
  isLoggedIn: false,
  isLoggingIn: false,
  user: {},
  permissions: [],
};

export default function (authState = INITIAL_STATE, action: AuthAction) {
  switch (action.type) {
    case AuthActionTypes.SET_LOGGING_IN:
      return {
        ...authState,
        isLoggingIn: action.data,
      };

    case AuthActionTypes.SET_IS_LOGGED_IN:
      return {
        ...authState,
        isLoggedIn: action.data,
      };

    case AuthActionTypes.SET_LOGGED_IN_USER:
      return {
        ...authState,
        user: action.data,
      };

    case AuthActionTypes.SET_PERMISSIONS:
      return {
        ...authState,
        permissions: action.data,
      };

    default:
      return authState;
  }
}
