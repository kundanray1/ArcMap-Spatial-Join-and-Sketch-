import { Td, Tr } from "@chakra-ui/react";
import { UserListItemType } from "interface/user/userListItem";
import React from "react";

const UserListItem: React.FC<UserListItemType> = (props) => {
  const { listData } = props;

  return (
    <Tr key={listData?.id ? listData?.id : "id"}>
      <Td>{listData?.username ? listData?.username : "name"}</Td>
      <Td>{listData?.email ? listData?.email : "email"}</Td>
      <Td>{listData?.status ? listData?.status : "status"}</Td>
      <Td>{listData?.role ? listData?.role : "date added"}</Td>
    </Tr>
  );
};

export default UserListItem;
