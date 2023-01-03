import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <>
      <SimpleGrid
        columns={[1, null, 2]}
        spacing="40px"
        gridTemplateColumns={{ base: "repeat(1,1fr)", lg: "0.3fr auto" }}
      >
        <Box>THIS IS DASHBOARD</Box>
      </SimpleGrid>
    </>
  );
};

export default Dashboard;
