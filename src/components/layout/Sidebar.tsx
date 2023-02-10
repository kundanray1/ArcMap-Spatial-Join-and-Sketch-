import {
  Box,
  BoxProps,
  CloseButton,
  Drawer,
  DrawerContent,
  Flex,
  FlexProps,
  Icon,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import routes from "constants/routes";
import React, { ReactNode, ReactText } from "react";
import { IconType } from "react-icons";
import { BsPencil } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { GrHomeRounded, GrMail } from "react-icons/gr";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TbEdit } from "react-icons/tb";

import { Link, useNavigate } from "react-router-dom";

interface LinkItemProps {
  name: string;
  icon: IconType;
  url: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: GrHomeRounded, url: routes.users.list },
  { name: "Assessment", icon: TbEdit, url: routes.assessment.detail },

  { name: "Reports", icon: BsPencil, url: routes.reports.index },
  { name: "Chat", icon: GrMail, url: routes.chats.list },
  {
    name: "Organization",
    icon: HiOutlineUserGroup,
    url: routes.organization.list,
  },
];

const Sidebar: React.FC<any> = ({ children }: { children: ReactNode }) => {
  let navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SidebarContent onClose={() => onClose} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={true}
        onOverlayClick={onClose}
        // size="xs"
      >
        <DrawerContent>
          <Text color={"red"}>Inside place</Text>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }}>{children}</Box>
    </>
  );
};

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const current = window.location.pathname;
  console.log(current, "current path");
  return (
    <Box
      bg={"#FFFFFF"}
      borderRight="2px"
      borderColor={"#E8E8E8"}
      w={{ base: "full", md: 60 }}
      pos="absolute"
      h="100%"
      {...rest}
    >
      <Flex alignItems="center" mx="8" justifyContent="end">
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          url={link.url}
          active={current === link.url ? true : false}
          // backgroundColor={}
          // _active={{ backgroundColor: "red" }}
          _activeLink={{ color: "red" }}
        >
          {link.name}
        </NavItem>
      ))}
      {/* <Link
        href="#"
        style={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
      >
        <Flex
          align="center"
          p="6"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "cyan.400",
            color: "white",
          }}
          {...rest}
        >
          <Home></Home>
          <Flex
            mr="4"
            width={"full"}
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
          >
            Home
          </Flex>
        </Flex>
      </Link> */}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  url: string;
  active: boolean;
}
const NavItem = ({ icon, children, url, active, ...rest }: NavItemProps) => {
  return (
    <Link to={url} style={{ textDecoration: "none" }}>
      <Stack flexDirection={"row"} align="start" justify={"space-between"}>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            fontWeight: "700",
          }}
          // _active={{ backgroundColor: "black" }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
        <Box
          // h={10}
          style={{
            borderColor: active ? "#23282C" : "white",
            // borderWidth: active ? "2" : "0",
            borderRadius: 3,
            backgroundColor: active ? "#23282C" : "transparent",
            minWidth: 4,
            height: 40,
          }}
        />
      </Stack>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};

export default Sidebar;
