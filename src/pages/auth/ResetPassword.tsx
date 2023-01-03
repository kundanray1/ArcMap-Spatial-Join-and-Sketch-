import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  ScaleFade,
  Stack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { resetPassword } from "api/auth";
import { Background } from "assets/images";
import TopBar from "components/layout/TopBar";
import routes from "constants/routes";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { BiHide, BiShow } from "react-icons/bi";
import { useMutation } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { validatePassword } from "utils/validate";

const ResetPassword: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [showNewPassword, setShowNewPassword] = React.useState(false);

  const token = params.get("token") || "";
  const uid = params.get("uid") || "";
  if (token === "" || uid === "") navigate(routes.auth.login);

  const newPassword = useRef({});
  const [errMsg, setErrMsg] = useState();
  const toast = useToast();
  const {
    formState: { errors },
    register,
    handleSubmit,
    watch,
  }: any = useForm();

  const setPasswordMutation = useMutation(
    ({ queryParams, data }: any) => resetPassword(queryParams, data),
    {
      onSuccess: (res: any) => {
        toast({
          title: "Please login with new password.",
          status: "success",
          isClosable: true,
        });
        navigate(routes.auth.login);
      },
      onError: (error: any) => {
        if (error?.response?.data?.errors?.token)
          setErrMsg(error?.response?.data?.errors?.token[0]);
        if (error?.response?.data?.errors?.password)
          setErrMsg(error?.response?.data?.errors?.password[0]);
        if (error?.response?.data?.link)
          setErrMsg(error?.response?.data?.link[0]);
        if (error?.response?.data?.uid)
          setErrMsg(error?.response?.data?.uid[0]);
      },
    }
  );
  newPassword.current = watch("new_password", "");

  const onSubmit = (data: any) => {
    const queryParams: any = {
      uid,
      token,
    };
    setPasswordMutation.mutate({ queryParams, data });
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
                      <Center textColor={"#AFAFAF"}>Reset password</Center>
                    </Text>
                    <Text pt={"2"}>
                      Use 8 or more characters with a mix of letters, numbers
                      and characters
                    </Text>
                    {setPasswordMutation.isError && (
                      <ScaleFade in={setPasswordMutation.isError}>
                        <Alert status="error">
                          <AlertIcon />
                          {errMsg}
                        </Alert>
                      </ScaleFade>
                    )}
                  </Stack>
                  <Stack direction="column" spacing="5">
                    <FormControl isInvalid={!!errors.new_password}>
                      <InputGroup>
                        <Input
                          id="new_password"
                          className="auth-input"
                          bg={"#FFFFFF !important"}
                          type={showNewPassword ? "text" : "password"}
                          placeholder="New Password"
                          {...register("new_password", {
                            required: "Password",
                            validate: (value: any) =>
                              validatePassword(value) ||
                              "Please provide valid password.",
                          })}
                        />
                        <InputRightElement>
                          <IconButton
                            icon={showNewPassword ? <BiHide /> : <BiShow />}
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            bg={"transparent"}
                            aria-label={showNewPassword ? "Hide" : "Show"}
                            size="sm"
                          />
                        </InputRightElement>
                      </InputGroup>
                      <FormErrorMessage>
                        {errors.new_password && errors.new_password?.message}
                      </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!errors.confirm_password}>
                      <InputGroup>
                        <Input
                          id="confirm_password"
                          className="auth-input"
                          bg={"#FFFFFF !important"}
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder={"Confirm New Password"}
                          {...register("confirm_password", {
                            required: "Confirm Password",
                            validate: (value: any) =>
                              value === newPassword.current ||
                              "The passwords do not match.",
                          })}
                        />
                        <InputRightElement>
                          <IconButton
                            icon={showConfirmPassword ? <BiHide /> : <BiShow />}
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                            bg={"transparent"}
                            aria-label={showConfirmPassword ? "Hide" : "Show"}
                            size="sm"
                          />
                        </InputRightElement>
                      </InputGroup>
                      <FormErrorMessage>
                        {errors.confirm_password &&
                          errors.confirm_password?.message}
                      </FormErrorMessage>
                    </FormControl>
                  </Stack>
                  <VStack spacing="6">
                    <Button
                      className={"auth-button"}
                      bg={"#757575"}
                      w="full"
                      mt={2}
                      type="submit"
                      rounded={"lg"}
                      size="lg"
                      colorScheme="primary"
                      isLoading={setPasswordMutation.isLoading}
                      fontSize={"12px"}
                    >
                      Log In
                    </Button>
                  </VStack>
                </Stack>
              </form>
            </Box>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ResetPassword;
