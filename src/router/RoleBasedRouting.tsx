import { useToast } from "@chakra-ui/react";
import routes from "constants/routes";
import React from "react";
import { connect } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { checkPermissions } from "utils/recon-admin";

interface Props {
  serviceName?: string;
  component: any;
  userPermissions?: any;
  users?: any;
  allowedPermissions?: any;
  path: any;
}

const RoleBasedRouting: React.FC<Props> = (props) => {
  const {
    serviceName,
    userPermissions,
    users,
    allowedPermissions,
    component: Component,
    path,
  } = props;
  const navigate = useNavigate();
  const toast = useToast();

  switch (serviceName) {
    case "settings":
      if (users.user_role.toLowerCase() !== "superadmin") {
        return <Navigate to={routes.dashboard} />;
      }
      break;
    case "deactivate-request-service":
      if (users.user_role.toLowerCase() !== "superadmin") {
        return <Navigate to={routes.dashboard} />;
      }
      break;
  }

  const permitted: any = allowedPermissions
    ? checkPermissions(userPermissions, allowedPermissions)
    : true;

  const handlingNoAccess = () => {
    toast({
      title:
        "You do not have permission to access it. Please contact administrator.",
      status: "error",
      isClosable: true,
    });
    navigate(-1);
    return null;
  };

  const getRouting = () => {
    if (permitted) return <Component {...props} />;
    else handlingNoAccess();
  };

  return <>{getRouting()}</>;
};

export default connect((state: any) => ({
  userPermissions: state?.data?.auth?.permissions,
  users: state?.data?.auth?.user?.user_information,
}))(RoleBasedRouting);
