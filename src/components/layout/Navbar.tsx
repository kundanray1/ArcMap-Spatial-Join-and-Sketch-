import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { withAuthState } from "components/hoc/auth";
import routes from "constants/routes";
import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import HideControl from "services/HideControl";

interface Props {
  logout: () => void;
}
interface Props {
  logout: () => void;
}

const Nav: React.FC<Props> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  let navigate = useNavigate();
  const { logout } = props;

  const onLogoutClick = async () => {
    try {
      logout();
    } catch (err) {}
  };

  return (
    <>
      <Box bg={"#393A3B"} px={4}>
        <Flex
          h={20}
          alignItems={"center"}
          justifyContent={"space-between"}
          color={"#fff"}
        >
          <IconButton
            bg={"#393A3B"}
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Image src={""} alt={"Recon"} w={[56, 60, 60, 72]} />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <HideControl
                hideFor="dashboard-list"
                renderNoAccess={(data: any) => {
                  return data ? data : "";
                }}
              >
                <Link
                  px={2}
                  py={1}
                  color={"white"}
                  rounded={"md"}
                  lineHeight={"16px"}
                  fontWeight={"500"}
                  _hover={{
                    textDecoration: "none",
                  }}
                  onClick={() => navigate(routes.dashboard)}
                >
                  Dashboard
                </Link>
              </HideControl>
              <HideControl
                hideFor="manage-list"
                renderNoAccess={(data: any) => {
                  return data ? data : "";
                }}
              >
                <Link
                  px={2}
                  py={1}
                  color={"white"}
                  rounded={"md"}
                  lineHeight={"16px"}
                  fontWeight={"500"}
                  _hover={{
                    textDecoration: "none",
                  }}
                  onClick={() => {
                    // navigate(routes.manage.users.list)
                    navigate(routes.dashboard);
                  }}
                >
                  Manage
                </Link>
              </HideControl>
              <HideControl
                hideFor="inventory-list"
                renderNoAccess={(data: any) => {
                  return data ? data : "";
                }}
              >
                <Link
                  px={2}
                  py={1}
                  color={"white"}
                  rounded={"md"}
                  lineHeight={"16px"}
                  fontWeight={"500"}
                  _hover={{
                    textDecoration: "none",
                  }}
                  onClick={() => {
                    // navigate(routes.inventories.list)
                    navigate(routes.dashboard);
                  }}
                >
                  Inventory
                </Link>
              </HideControl>

              <HideControl
                hideFor="report-list"
                renderNoAccess={(data: any) => {
                  return data ? data : "";
                }}
              >
                <Link
                  px={2}
                  py={1}
                  color={"white"}
                  rounded={"md"}
                  lineHeight={"16px"}
                  fontWeight={"500"}
                  _hover={{
                    textDecoration: "none",
                  }}
                  onClick={() => {
                    // navigate(routes.reports.index);
                    navigate(routes.dashboard);
                  }}
                >
                  Reports
                </Link>
              </HideControl>
              <HideControl
                hideFor="company-list"
                renderNoAccess={(data: any) => {
                  return data ? data : "";
                }}
              >
                <Link
                  px={2}
                  py={1}
                  color={"white"}
                  rounded={"md"}
                  lineHeight={"16px"}
                  fontWeight={"500"}
                  _hover={{
                    textDecoration: "none",
                  }}
                  onClick={() => {
                    // navigate(routes.companies.list);
                    navigate(routes.dashboard);
                  }}
                >
                  Companies
                </Link>
              </HideControl>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList color={"#000"}>
                <MenuItem
                  onClick={() => {
                    // navigate(routes.settings.index);
                    navigate(routes.dashboard);
                  }}
                >
                  <IconButton
                    icon={<AiOutlineSetting />}
                    variant="link"
                    aria-label={"Settings"}
                    color="blue.300"
                    size="lg"
                  />
                  Settings
                </MenuItem>
                <MenuDivider />
                <MenuItem onClick={onLogoutClick}>
                  <IconButton
                    icon={<BiLogOut />}
                    variant="link"
                    aria-label={"Settings"}
                    color="blue.300"
                    size="lg"
                  />
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link
                px={2}
                py={1}
                color={"white"}
                rounded={"md"}
                lineHeight={"16px"}
                fontWeight={"500"}
                _hover={{
                  textDecoration: "none",
                }}
                onClick={() => navigate(routes.dashboard)}
              >
                Dashboard
              </Link>
              <Link
                px={2}
                py={1}
                color={"white"}
                rounded={"md"}
                lineHeight={"16px"}
                fontWeight={"500"}
                _hover={{
                  textDecoration: "none",
                }}
                onClick={() => {
                  // navigate(routes.manage.users.list);
                  navigate(routes.dashboard);
                }}
              >
                Manage
              </Link>
              <Link
                px={2}
                py={1}
                color={"white"}
                rounded={"md"}
                lineHeight={"16px"}
                fontWeight={"500"}
                _hover={{
                  textDecoration: "none",
                }}
                onClick={() => {
                  // navigate(routes.inventories.list);
                  navigate(routes.dashboard);
                }}
              >
                Inventory
              </Link>
              <Link
                px={2}
                py={1}
                color={"white"}
                rounded={"md"}
                lineHeight={"16px"}
                fontWeight={"500"}
                _hover={{
                  textDecoration: "none",
                }}
                onClick={() => {
                  // navigate(routes.sales.list);
                  navigate(routes.dashboard);
                }}
              >
                Sales
              </Link>
              <Link
                px={2}
                py={1}
                color={"white"}
                rounded={"md"}
                lineHeight={"16px"}
                fontWeight={"500"}
                _hover={{
                  textDecoration: "none",
                }}
                onClick={() => {
                  // navigate(routes.afe.list);
                  navigate(routes.dashboard);
                }}
              >
                AFE
              </Link>
              <Link
                px={2}
                py={1}
                color={"white"}
                rounded={"md"}
                lineHeight={"16px"}
                fontWeight={"500"}
                _hover={{
                  textDecoration: "none",
                }}
                onClick={() => {
                  // navigate(routes.reports.index);
                  navigate(routes.dashboard);
                }}
              >
                Reports
              </Link>
              <Link
                px={2}
                py={1}
                color={"white"}
                rounded={"md"}
                lineHeight={"16px"}
                fontWeight={"500"}
                _hover={{
                  textDecoration: "none",
                }}
                onClick={() => {
                  // navigate(routes.companies.list);
                  navigate(routes.dashboard);
                }}
              >
                Companies
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default withAuthState(Nav);
