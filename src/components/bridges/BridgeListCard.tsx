import {
  Box,
  Card,
  CardBody,
  Circle,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { showLocation } from "components/map/MapCutomFuntioncs";
import {
  BridgeData,
  FeaturesEntity,
  GeometryI,
} from "interface/bridges/bridgeInformation";

interface DataI {
  data: BridgeData;
}

const BridgeListCard = (data: BridgeData) => {
  function ShowLocation(p: GeometryI) {
    // focusFeature(p.geometry);

    if (p.coordinates && p.coordinates[0] && p.coordinates[1]) {
      let dummy = {
        address: "George S Eccless 2002 Legacy Bridge",
        location: {
          x: p.coordinates[0][0],
          y: p.coordinates[0][1],
        },
        score: 20,

        extent: {
          xmin: p.coordinates[0][0],
          ymin: p.coordinates[0][1],
          xmax: p.coordinates[1][0],
          ymax: p.coordinates[1][1],
          spatialReference: {
            wkid: 4326,
          },
        },
      };
      // var line = p;

      showLocation(dummy);
      // focusFeature(p);
    } else return;
  }

  return data?.features?.map((item: FeaturesEntity, n: Number) => {
    return (
      <Card
        key={item.properties.globalid}
        onClick={() => ShowLocation(item.geometry)}
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="filled"
        bgColor={"background"}
        w="95%"
        display={"flex"}
        align="flex-start"
        p={"0px"}
        mb={"10px"}
        justify="flex-start"
        cursor={"pointer"}
        // h={"78px"}
      >
        <Box
          maxW={{ sm: "30%", md: "30%", lg: "30%" }}
          minW={{ sm: "30%", md: "30%", lg: "30%" }}
          maxH={{ sm: "100%", md: "100%", lg: "100%" }}
          minH={{ sm: "100%", md: "100%", lg: "100%" }}
        >
          <Image
            objectFit="cover"
            // width={"-webkit-fit-available"}
            minH={"100px"}
            src="https://media.istockphoto.com/id/117751351/photo/ravenel-bridge-in-charleston-sc.jpg?s=612x612&w=0&k=20&c=gd2DYSiomkQEswKcp-MPT3VvBMhwTY5HAqL7UEwfcXI="
            alt="Caffe Latte"
          />
        </Box>
        <Stack w={"60%"}>
          <CardBody py={"5px"}>
            <Heading size="sm">{item.properties.bridge_nam}</Heading>
            <Box noOfLines={3}>
              <Text fontSize={"10px"} fontWeight={"400"}>
                Type: {item.properties.bridge_typ}
              </Text>
              <Text fontSize={"10px"}>
                Assessment: {item.properties.would_you_}
              </Text>
              <Text fontSize={"10px"}>Risk:{item.properties.status}</Text>
            </Box>
          </CardBody>
        </Stack>
        <Box w={"10%"} pt="5px">
          <Circle
            size="13px"
            bg={
              item.properties.status === "risk"
                ? "tomato"
                : item.properties.status === "fair"
                ? "#ECD37B"
                : "green"
            }
            color="white"
          />
        </Box>
      </Card>
    );
  });
};

export default BridgeListCard;
