import { Box, Divider, Link, Text, Tooltip } from "@chakra-ui/react";
import routes from "constants/routes";
import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  // styles
  const navBoxStyles = {
    h: "40px",
    cursor: "pointer",
    padding: "10px",
  };

  const navLinkActiveStyles = {
    d: "block",
    color: "#1A1B1F",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "18px",
  };

  return (
    <>
      <Box
        position="relative"
        role="group"
        border={"1px solid"}
        borderColor={"#C5C6C9"}
        w={300}
        boxSizing={"border-box"}
        borderWidth={2}
      >
        <Text
          color={"#406F96"}
          fontSize={"20px"}
          fontWeight={800}
          padding={"3"}
        >
          Manage
        </Text>

        <Divider background={"#C5C6C9"} height={"3px"} opacity={0.5} />

        <Link
          sx={
            window.location.pathname?.includes("/pits")
              ? navLinkActiveStyles
              : undefined
          }
          color={"#737373"}
          fontWeight={500}
          fontSize={"16px"}
          transition="all 0.35s"
          display="block"
          _hover={navLinkActiveStyles}
          onClick={() => {
            // navigate(routes.manage.pits.list);
            navigate(routes.dashboard);
          }}
        >
          <Tooltip label={"Pit"} placement="left-end" hasArrow>
            <Text sx={navBoxStyles}>Pit</Text>
          </Tooltip>
        </Link>

        <Link
          sx={
            window.location.pathname?.includes("/plants")
              ? navLinkActiveStyles
              : undefined
          }
          color={"#737373"}
          fontWeight={500}
          fontSize={"16px"}
          transition="all 0.35s"
          display="block"
          _hover={navLinkActiveStyles}
          onClick={() => {
            // navigate(routes.manage.plants.list);
            navigate(routes.dashboard);
          }}
        >
          <Tooltip label={"Plant"} placement="left-end" hasArrow>
            <Text sx={navBoxStyles}>Plant</Text>
          </Tooltip>
        </Link>

        <Link
          sx={
            window.location.pathname?.includes("/users")
              ? navLinkActiveStyles
              : undefined
          }
          color={"#737373"}
          fontWeight={500}
          fontSize={"16px"}
          transition="all 0.35s"
          display="block"
          _hover={navLinkActiveStyles}
          onClick={() => {
            // navigate(routes.manage.users.list);
            navigate(routes.dashboard);
          }}
        >
          <Tooltip label={"Users"} placement="left-end" hasArrow>
            <Text sx={navBoxStyles}>Users</Text>
          </Tooltip>
        </Link>

        <Link
          sx={
            window.location.pathname?.includes("/peoples")
              ? navLinkActiveStyles
              : undefined
          }
          color={"#737373"}
          fontWeight={500}
          fontSize={"16px"}
          transition="all 0.35s"
          display="block"
          _hover={navLinkActiveStyles}
          onClick={() => {
            // navigate(routes.manage.peoples.list);
            navigate(routes.dashboard);
          }}
        >
          <Tooltip label={"People"} placement="left-end" hasArrow>
            <Text sx={navBoxStyles}>People</Text>
          </Tooltip>
        </Link>

        <Link
          sx={
            window.location.pathname?.includes("/equipments")
              ? navLinkActiveStyles
              : undefined
          }
          color={"#737373"}
          fontWeight={500}
          fontSize={"16px"}
          transition="all 0.35s"
          display="block"
          _hover={navLinkActiveStyles}
          onClick={() => {
            // navigate(routes.manage.equipments.list);
            navigate(routes.dashboard);
          }}
        >
          <Tooltip label={"Equipment"} placement="left-end" hasArrow>
            <Text sx={navBoxStyles}>Equipment</Text>
          </Tooltip>
        </Link>

        <Link
          sx={
            window.location.pathname?.includes("/products")
              ? navLinkActiveStyles
              : undefined
          }
          color={"#737373"}
          fontWeight={500}
          fontSize={"16px"}
          transition="all 0.35s"
          display="block"
          _hover={navLinkActiveStyles}
          onClick={() => {
            // navigate(routes.manage.products.list);
            navigate(routes.dashboard);
          }}
        >
          <Tooltip label={"Product"} placement="left-end" hasArrow>
            <Text sx={navBoxStyles}>Product</Text>
          </Tooltip>
        </Link>
      </Box>
    </>
  );
};

export default Sidebar;
