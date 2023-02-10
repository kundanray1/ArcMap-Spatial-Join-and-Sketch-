import { Box } from "@chakra-ui/react";

export const VerticalSeperator = (h: any) => {
  if (h == "md") {
    return <Box minHeight={"25px"} backgroundColor="red"></Box>;
  } else if (h == "sm") {
    return <Box minHeight={"20px"} backgroundColor="red" />;
  } else if (h == "l") {
    return <Box minHeight={"30px"} backgroundColor="red"></Box>;
  } else return null;
};
