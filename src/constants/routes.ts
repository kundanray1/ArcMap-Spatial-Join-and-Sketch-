const routes = {
  dashboard: "/",
  auth: {
    login: "/login",
    forgotPassword: "/forgot-password",
    resetPassword: "/reset-password/*",
    setPassword: "/set-password",
    verifyEmail: "/verify-email",
    register: "/register",
  },
  settings: {
    base: "/settings/*",
    index: "/settings/index",
  },
  users: {
    list: "/users/list",
    create: "/users/create",
    edit: "/users/edit/:id",
    view: "/users/view/:id",
  },
  companies: {
    base: "/companies/*",
    list: "/companies/list",
    create: "/companies/create",
    edit: "/companies/edit/:id",
    view: "/companies/view/:id",
  },
  chats: {
    list: "/chats",
  },
  reports: {
    base: "/reports/*",
    index: "/reports",
  },
  remaining: "/*",
};

export default routes;
