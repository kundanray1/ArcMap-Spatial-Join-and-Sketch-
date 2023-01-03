import { Navigate, Outlet, useLocation } from "react-router-dom";

import { Box, Flex } from "@chakra-ui/react";
import { withAuthState } from "components/hoc/auth";
import Nav from "components/layout/Navbar";
import Sidebar from "components/layout/Sidebar";
import routes from "constants/routes";
import React, { useEffect, useState } from "react";

interface IProps {
  isLoggedIn?: boolean;
  [key: string]: any;
}

/**
 * Component to authenticate private routes.
 */

const AuthenticateRoute: React.FC<IProps> = (props) => {
  const { isLoggedIn } = props;
  const [isSidebar, setIsSidebar] = useState(false);
  let location = useLocation();

  useEffect(() => {
    const path = window.location.pathname.split("/");
    if (path[1] === "manage") {
      setIsSidebar(true);
    } else {
      setIsSidebar(false);
    }
  }, [location]);

  return isLoggedIn ? (
    <>
      <Nav />
      <Flex>
        {isSidebar && (
          <Box p={8} mr={"1"}>
            <Sidebar />
          </Box>
        )}
        <Box maxHeight="100vh" overflowY="scroll" flex={1}>
          <Box p={8}>
            <Outlet />
          </Box>
        </Box>
      </Flex>
    </>
  ) : (
    <Navigate to={routes.auth.login} replace={true} />
  );
};

export default withAuthState(AuthenticateRoute);
