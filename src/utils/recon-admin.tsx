/**
 * Utils that are specific to List Info Business Solutions Domain
 */

import { Permission } from "interface/user/userInformation";

/**
 * Check permissions for given route by tallying userPermission with allowedPermissions
 *
 * @param userPermissions : Permissions provided for logged in user
 * @param allowedPermissions
 * @returns true if permitted
 */
export const checkPermissions = (
  userPermissions: [Permission],
  allowedPermissions: string[]
) => {
  if (allowedPermissions.length === 0) {
    return true;
  }
  return allowedPermissions.every((allowedPer) =>
    userPermissions.some((permission: any) => allowedPer === permission)
  );
};

export const checkSomePermissions = (
  userPermissions: Permission,
  allowedPermissions: string[]
) => {
  if (allowedPermissions.length === 0) {
    return true;
  }

  const permissions = [...userPermissions.permission];

  return permissions.some((permission: any) =>
    allowedPermissions.includes(permission)
  );
};

export const getFullName = (user: any) => {
  if (user) {
    if (user?.middle_name) {
      return `${user.first_name} ${user.middle_name} ${user.last_name}`;
    }
    return `${user.first_name} ${user.last_name}`;
  }
  return "";
};
