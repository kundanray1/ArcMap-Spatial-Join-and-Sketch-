import { Box, Image } from "@chakra-ui/react";

export default function TopBar() {
  return (
    <>
      <Box bg={"#393A3B"} px={4} h={20}>
        <Image src={""} alt={"Recon"} color={"white"} w={[56, 60, 64, 72]} />
      </Box>
    </>
  );
}
