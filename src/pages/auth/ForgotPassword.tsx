import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Heading,
  Input,
  ScaleFade,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { forgotPassword } from "api/auth";
import { Background } from "assets/images";
import TopBar from "components/layout/TopBar";
import routes from "constants/routes";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { validEmail } from "utils/validate";
import "./auth.css";
const ForgotPassword: React.FC = () => {
  const [isEmailSubmitted, setIsEmailSubmitted] = useState<Boolean>(false);

  const navigate = useNavigate();
  const toast = useToast();
  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm<any>();

  const forgotMutation = useMutation((data) => forgotPassword(data), {
    onSuccess: (res: any) => {
      reset();
      setIsEmailSubmitted(true);
      toast({
        title: "We have emailed your password reset link!",
        status: "success",
        isClosable: true,
      });
    },
    onError: (res: any) => {
      setIsEmailSubmitted(false);
    },
  });

  const onSubmit = (data: any) => {
    setIsEmailSubmitted(true);

    const formData: any = {
      email: data?.email,
    };
    // forgotMutation.mutate(formData);
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
            zIndex={"1"}
            bg="transparent"
            maxWidth={"330px"}
            rounded="3xl"
            pt={"7rem"}
            color={"#FFFFFF"}
          >
            <Heading as={"h1"} color={"#FFFFFF"} textColor={"#FFFFFF"}>
              {" "}
              Logo Here
            </Heading>
            <Text as="h2">
              the rapid infrastructure evaluation collection and integration
              application
            </Text>
          </Box>
        </Flex>
        <Flex flexBasis={"50%"} justifyContent={"center"}>
          <Stack direction="column" spacing="68">
            <Box
              bg="#545454"
              zIndex={"1"}
              p="8"
              shadow="box"
              rounded="3xl"
              width={"356px"}
              fontSize={"14px"}
            >
              {!isEmailSubmitted && (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Stack direction="column" spacing="8">
                    <Stack direction="column" spacing="4">
                      {/* <Heading> */}
                      <Center textColor={"#AFAFAF"}>Reset Password</Center>
                      {forgotMutation.isError && (
                        <ScaleFade in={forgotMutation.isError}>
                          <Alert status="error">
                            <AlertIcon />
                            Email address not found.
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
                          bg={"#FFFFFF"}
                          type="email"
                          rounded={"lg"}
                          placeholder="Email"
                          {...register("email", {
                            required: "Email",
                            validate: (value) =>
                              validEmail(value) ||
                              "Please Provide valid Email address.",
                          })}
                        />
                      </FormControl>

                      <Button
                        className={"auth-button"}
                        type="submit"
                        size="lg"
                        colorScheme="primary"
                        isLoading={forgotMutation.isLoading}
                      >
                        Send reset instructions
                      </Button>
                    </Stack>
                  </Stack>
                </form>
              )}
              {isEmailSubmitted && (
                <Stack direction="column" spacing="8">
                  <Stack direction="column" spacing="4">
                    {/* <Heading> */}
                    <Center textColor={"#AFAFAF"}>Reset Password</Center>
                    {forgotMutation.isError && (
                      <ScaleFade in={forgotMutation.isError}>
                        <Alert status="error">
                          <AlertIcon />
                          Email address not found.
                        </Alert>
                      </ScaleFade>
                    )}
                  </Stack>
                  <Text pb={"2rem"}>
                    You have been emailed a temporary link that you can use to
                    update your password. Please check your email account and
                    click the link to change your password.
                  </Text>
                  <Button
                    bg={"#757575"}
                    type="submit"
                    colorScheme="primary"
                    size="lg"
                    className={"auth-button"}
                    onClick={() => {
                      navigate(routes.auth.login);
                    }}
                  >
                    Back to login
                  </Button>
                </Stack>
              )}
            </Box>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ForgotPassword;
