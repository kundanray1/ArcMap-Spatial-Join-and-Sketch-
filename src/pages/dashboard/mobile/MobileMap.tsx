import { Box, ChakraProvider } from "@chakra-ui/react";
import TessalationMapMobile from "components/mobilemap/TessalationMapMobile";
import React from "react";

const MobileMap: React.FC = () => {
  /**
   * Handle reset filter params
   */
  console.log("MobileMap rerender Test");
  /**
   * Handle filter params submit
   */

  return (
    <ChakraProvider>
      <Box display={"flex"} width="full" height={"full"} position="fixed">
        {/* <Box width={{ base: "0%", md: "0%" }} display={"flex"}>
          <BridgeList />
        </Box> */}
        {/* <Flex
          minWidth={"-webkit-fill-available"}
          height={"-webkit-fit-content"}
        > */}
        <TessalationMapMobile />
        {/* </Flex> */}
      </Box>
    </ChakraProvider>
  );
};
export default MobileMap;
