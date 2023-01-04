import { Box, Flex } from "@chakra-ui/react";
import { withAuthState } from "components/hoc/auth";
import Nav from "components/layout/Navbar";
import Sidebar from "components/layout/Sidebar";
import routes from "constants/routes";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface IProps {
  isLoggedIn?: boolean;
  [key: string]: any;
}

/**
 * Component to authenticate private routes.
 */

const AuthenticateRoute: React.FC<IProps> = (props) => {
  const { isLoggedIn } = props;

  return isLoggedIn ? (
    <>
      <Nav />
      <Flex background={"#FFFFFF"}>
        <Sidebar />
        <Box
          minHeight="calc(100vh - 75px)"
          overflowY="scroll"
          flex={1}
          p={8}
          bg="#ffffff"
        >
          <Outlet />
        </Box>
      </Flex>
    </>
  ) : (
    <Navigate to={routes.auth.login} replace={true} />
  );
};

export default withAuthState(AuthenticateRoute);
