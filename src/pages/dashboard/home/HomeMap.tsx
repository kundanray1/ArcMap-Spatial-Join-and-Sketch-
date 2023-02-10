import { Box, ChakraProvider } from "@chakra-ui/react";
import BridgeList from "components/bridges/BridgeList";
import TessalationMap from "components/map/TessalationMap";
import React from "react";

const HomeMap: React.FC = () => {
  /**
   * Handle reset filter params
   */
  console.log("homeMap rerender Test");
  /**
   * Handle filter params submit
   */

  return (
    <ChakraProvider>
      <Box display={"flex"} flexDirection="row">
        <Box width={{ base: "0%", md: "25%" }} display={"flex"}>
          <BridgeList />
        </Box>
        <Box width={{ base: "100%", md: "75%" }}>
          <TessalationMap />
        </Box>
      </Box>
    </ChakraProvider>
  );
};
export default HomeMap;
