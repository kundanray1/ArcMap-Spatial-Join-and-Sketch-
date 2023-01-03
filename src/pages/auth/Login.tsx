import { FormControl } from "@chakra-ui/form-control";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Flex,
  FormErrorMessage,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  ScaleFade,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Background } from "assets/images";
import { withAuthState } from "components/hoc/auth";
import TopBar from "components/layout/TopBar";
import routes from "constants/routes";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BiHide, BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./auth.css";
interface Props {
  login: (email: string, pw: string) => void;
}

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login: React.FC<Props> = (props) => {
  const { login } = props;
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const {
    register,
    formState: { errors },
    handleSubmit,
    formState,
  } = useForm<LoginFormInputs>();
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      await login(data.email, data.password);
    } catch (e: any) {
      if (
        e?.message ===
        "You are not authorized to login. Please contact administrator"
      ) {
        setErrMsg(
          "You are not authorized to login. Please contact administrator."
        );
      } else {
        setErrMsg("Email or password did not match.");
      }
      setIsError(true);
    }
  };

  return (
    <Box bg="gray.50">
      <TopBar />
      <Flex
        h="calc(100vh - 70px)"
        backgroundImage={Background}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        pt={"7rem"}
        className={"login-container"}
      >
        <Flex className="overlay"></Flex>

        <Flex flexBasis={"50%"} justifyContent={"center"}>
          <Box
            bg="transparent"
            width={"330px"}
            rounded="3xl"
            pt={"7rem"}
            zIndex={"1"}
          >
            <Heading as={"h1"} textColor={"#FFFFFF"}>
              {" "}
              Logo Here
            </Heading>
            <Text as="h2" fontSize={"18px"}>
              the rapid infrastructure evaluation collection and integration
              application
            </Text>
          </Box>
        </Flex>
        <Flex flexBasis={"50%"} justifyContent={"center"}>
          <Stack direction="column" spacing="68">
            <Box
              bg="#545454"
              p="8"
              pb={"77"}
              shadow="box"
              rounded="3xl"
              width={"356px"}
              zIndex={"1"}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack direction="column" spacing="8">
                  <Stack direction="column" spacing="4">
                    <Text as="h2">
                      <Center textColor={"#AFAFAF"}>
                        Log in to your account
                      </Center>
                    </Text>
                    {isError && (
                      <ScaleFade in={isError}>
                        <Alert status="error">
                          <AlertIcon />
                          {errMsg}
                        </Alert>
                      </ScaleFade>
                    )}
                  </Stack>
                  <Stack direction="column" spacing="5">
                    <FormControl
                      colorScheme="primary"
                      isInvalid={!!errors.email}
                    >
                      <Input
                        id="email"
                        className="auth-input"
                        bg={"#FFFFFF !important"}
                        type="email"
                        placeholder="Email"
                        {...register("email", {
                          required: "Email",
                        })}
                      />
                      <FormErrorMessage>
                        {errors.email && errors.email?.message}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl
                      colorScheme="primary"
                      isInvalid={!!errors.password}
                    >
                      <InputGroup>
                        <Input
                          id="password"
                          className="auth-input"
                          bg={"#FFFFFF !important"}
                          type={show ? "text" : "password"}
                          placeholder="Password"
                          {...register("password", {
                            required: "Password",
                          })}
                        />
                        <InputRightElement>
                          <IconButton
                            icon={show ? <BiHide /> : <BiShow />}
                            onClick={handleClick}
                            aria-label={show ? "Hide" : "Show"}
                            bg={"transparent"}
                            size="sm"
                          />
                        </InputRightElement>
                      </InputGroup>

                      <FormErrorMessage>
                        {errors.password && errors.password?.message}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl>
                      <Flex justify="end">
                        <Button
                          variant="link"
                          colorScheme="primary"
                          color={"#AFAFAF"}
                          fontSize={"10px"}
                        >
                          <Link to={routes.auth.forgotPassword}>
                            Forgot password?
                          </Link>
                        </Button>
                      </Flex>
                    </FormControl>
                    <Button
                      className={"auth-button"}
                      bg={"#757575"}
                      w="full"
                      type="submit"
                      rounded={"lg"}
                      size="lg"
                      colorScheme="primary"
                      isLoading={formState.isSubmitting}
                      fontSize={"12px"}
                    >
                      Log In
                    </Button>
                  </Stack>
                  <Flex justify={"center"} marginTop={"10px !important"}>
                    <Text>Don&#8217;t have an account?</Text>
                    <Link to={routes.auth.forgotPassword}>
                      <Text textColor={"#FFFFFF"}>
                        {" "}
                        &nbsp;Contact support.{" "}
                      </Text>
                    </Link>
                  </Flex>
                </Stack>
              </form>
            </Box>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default withAuthState(Login);
