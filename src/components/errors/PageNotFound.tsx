import { Button, ButtonGroup, Flex, Heading, Text } from "@chakra-ui/react";
import { LottieNotFound } from "assets/lotties";
import React from "react";
import Lottie from "react-lottie";

export interface FallBackUIProps {}

const PageNotFound: React.FC<FallBackUIProps> = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LottieNotFound,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Flex
      width="100%"
      height="100vh"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Lottie options={defaultOptions} height={400} width={400} />
      <Heading as="h3" size="lg" mt={10} mb={3}>
        Page Not Found
      </Heading>
      <Text fontSize="lg" color={"#406F96"}>
        The url you have requested is not found.
      </Text>
      <ButtonGroup mt={10}>
        <Button
          variant="outline"
          colorScheme="primary"
          size="lg"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Take me home
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default PageNotFound;
