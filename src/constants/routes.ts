const routes = {
  map_mobile: "/mobile",
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
  assessment: {
    detail: "/assessment/detail",
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
  organization: {
    list: "/organization/list",
    create: "/organization/create",
    edit: "/organization/edit/:id",
    view: "/organization/view/:id",
  },
  remaining: "/*",
};

export default routes;
