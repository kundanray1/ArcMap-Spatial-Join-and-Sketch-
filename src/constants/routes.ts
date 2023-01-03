const routes = {
  dashboard: "/",
  auth: {
    login: "/login",
    forgotPassword: "/forgot-password",
    resetPassword: "/reset-password*",
    setPassword: "/set-password",
    verifyEmail: "/verify-email",
    register: "/register",
  },
  remaining: "/*",
};

export default routes;
