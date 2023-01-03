import { useToast } from "@chakra-ui/react";
import React from "react";
import { connect } from "react-redux";
import { checkPermissions } from "utils/recon-admin";
interface Props {
  userPermissions: any;
  allowedPermissions: any;
  children?: any;
  renderNoAccess?: any;
}
const AccessControl: React.FC<Props> = ({
  userPermissions,
  allowedPermissions,
  children,
  renderNoAccess,
}) => {
  const toast = useToast();
  const permitted: any = checkPermissions(userPermissions, allowedPermissions);

  if (permitted) {
    return children;
  }

  const handleClick = () => {
    toast({
      title: `You don't have Permission.`,
      status: "error",
      isClosable: true,
    });
  };

  const element = React.Children.map(children, (child) => {
    return React.cloneElement(child, { onClick: handleClick });
  });
  return renderNoAccess(element);
};

AccessControl.defaultProps = {
  allowedPermissions: [],
  userPermissions: [],
  renderNoAccess: () => null,
};

// Compose AccessControl component with redux

export default connect((state: any) => ({
  userPermissions: state?.data?.auth?.permissions,
}))(AccessControl);
