import {
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Logo } from "assets/images";
import { withAuthState } from "components/hoc/auth";
import routes from "constants/routes";
import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface Props {
  logout: () => void;
}
interface Props {
  logout: () => void;
}

const Nav: React.FC<Props> = (props) => {
  let navigate = useNavigate();
  const { logout } = props;

  const onLogoutClick = async () => {
    try {
      logout();
    } catch (err) {}
  };

  return (
    <>
      <Box bg={"#44474A"} px={4}>
        <Flex
          h={20}
          alignItems={"center"}
          justifyContent={"space-between"}
          color={"#fff"}
        >
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Image src={Logo} alt={"Recon"} w={[56, 35, 35, 90]} />
            </Box>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <HStack spacing={8} alignItems={"center"}>
                <Text fontWeight={600}>Howdy, Justin.</Text>

                <Stack justify={"center"} align={"center"}>
                  <Badge
                    fontSize={8}
                    color="white"
                    // top={0}
                    right={"-90%"}
                    top={-2}
                    width={18}
                    height={18}
                    display="flex"
                    backgroundColor="#56AAC3"
                    borderRadius={"30"}
                    position={"relative"}
                    textAlign={"center"}
                    justifyContent="center"
                    alignItems={"center"}
                    zIndex={2}
                  >
                    2
                  </Badge>
                  <Stack
                    borderWidth={1}
                    borderColor="white"
                    borderRadius={30}
                    width={30}
                    height={30}
                    align="center"
                    justify="center"
                    alignSelf={"center"}
                    position={"absolute"}
                  >
                    <FiMail></FiMail>
                  </Stack>
                </Stack>
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
                  ></Avatar>
                </MenuButton>
              </HStack>
              <MenuList color={"#000"}>
                <MenuItem
                  onClick={() => {
                    navigate(routes.settings.index);
                  }}
                >
                  <Center px={"4"}>
                    <Icon
                      aria-label={"Settings"}
                      color="blue.300"
                      boxSize={8}
                      mt={"4"}
                    >
                      <AiOutlineSetting />
                    </Icon>
                    Settings
                  </Center>
                </MenuItem>
                <MenuDivider />
                <MenuItem onClick={onLogoutClick}>
                  <Icon
                    aria-label={"Settings"}
                    color="blue.300"
                    boxSize={8}
                    mt={"4"}
                  >
                    <BiLogOut />
                  </Icon>
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default withAuthState(Nav);
