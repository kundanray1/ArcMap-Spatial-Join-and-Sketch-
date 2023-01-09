import {
  setIsLoggedIn,
  setLoggedInUser,
  setLoggingIn,
  setPermissions,
} from "actions/data/auth";
import { login } from "api/auth";
import routes from "constants/routes";
import { Component } from "react";
import { connect } from "react-redux";
import { AnyAction, bindActionCreators, Dispatch } from "redux";
import * as authService from "services/auth";

/**
 * Auth state Higher Order Component.
 * Use this HOC if you need to use/modify User state.
 */
function withAuthState(WrappedComponent: any) {
  class Auth extends Component<any, any> {
    /**
     * Login user and save tokens and user data.
     *
     * @param {string} email
     * @param {string} password
     */
    login = async (email: string, password: string) => {
      try {
        const {
          setLoggingIn,
          setIsLoggedIn,
          setLoggedInUser,
          setPermissions,
        }: any = this.props;

        setLoggingIn(true);

        const { data } = await login({ email, password });
        await authService.persist({
          token: data?.access,
          refreshToken: data?.refresh,
          expiryTime: data?.expiration,
        });
        /**
         * Fetch permissions for a given users
         */
        setLoggingIn(false);
        setIsLoggedIn(true);
        setLoggedInUser(data?.data?.user);
        setPermissions(data?.data?.user_information?.permission);
        setTimeout(async () => {
          window.location.href = routes.dashboard;
        }, 500);
      } catch (err: any) {
        setLoggingIn(false);
        const errMsg = err?.response?.data?.message || "Invalid Credentials";
        throw new Error(errMsg);
      }
    };

    logout = async () => {
      authService.logout();
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          login={this.login}
          logout={this.logout}
        />
      );
    }
  }

  const mapStateToProps = (state: any) => {
    let { isLoggedIn, isLoggingIn, user, permissions } = state.data.auth;

    return {
      isLoggedIn,
      isLoggingIn,
      loggedInUser: user,
      permissions: permissions,
    };
  };

  const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return bindActionCreators(
      { setLoggingIn, setIsLoggedIn, setLoggedInUser, setPermissions },
      dispatch
    );
  };

  return connect(mapStateToProps, mapDispatchToProps)(Auth);
}

export { withAuthState };
