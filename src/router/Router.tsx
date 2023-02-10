import PageNotFound from "components/errors/PageNotFound";
import routes from "constants/routes";
import { Login } from "pages/auth";
import ForgotPassword from "pages/auth/ForgotPassword";
import ResetPassword from "pages/auth/ResetPassword";
import SetPassword from "pages/auth/SetPassword";
import AssessmentDetail from "pages/dashboard/assessment/AssessmentDetail";
import Dashboard from "pages/dashboard/Dashboard";
import HomeMap from "pages/dashboard/home/HomeMap";
import MobileMap from "pages/dashboard/mobile/MobileMap";
import OrganizationList from "pages/dashboard/organization/OrganizationList";
import UserList from "pages/dashboard/users/UserList";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthenticateRoute from "./AuthenticateRoute";

// Top level application router.

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.auth.login} element={<Login />} />
        <Route path={routes.auth.forgotPassword} element={<ForgotPassword />} />
        <Route path={routes.auth.setPassword} element={<SetPassword />} />
        <Route path={routes.auth.resetPassword} element={<ResetPassword />} />

        <Route path={routes.dashboard} element={<AuthenticateRoute />}>
          <Route path={routes.users.list} element={<HomeMap />} />

          <Route path={routes.chats.list} element={<UserList />} />
          <Route
            path={routes.assessment.detail}
            element={<AssessmentDetail />}
          />

          <Route
            path={routes.organization.list}
            element={<OrganizationList />}
          />
          <Route path={routes.reports.index} element={<UserList />} />

          <Route path={routes.dashboard} element={<Dashboard />} />
        </Route>
        <Route path={routes.map_mobile} element={<MobileMap />} />

        <Route path={routes.remaining} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
