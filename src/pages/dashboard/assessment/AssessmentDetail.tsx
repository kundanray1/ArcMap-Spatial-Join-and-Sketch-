import { Box, Button, Divider, Image, Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { GiInfo } from "react-icons/gi";
import ImageViewer from "./ImageViewer";

const DamageSection = ({
  title,
  children,
  buttonData,
}: {
  title: String;
  children?: ReactElement;
  buttonData?: { status: String | null | boolean };
}) => {
  return (
    <Box className="overall-damage-container">
      <Text color={"black"} fontSize="13px" my="5px">
        {title}
      </Text>
      <Box className="damage-rating-container" justifyContent={""}>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          mr="10px"
          flex={0.4}
        >
          <Button
            backgroundColor={
              buttonData?.status === "ND"
                ? "#8CB832"
                : buttonData?.status === true
                ? "#8CB832"
                : "#9C9C9C"
            }
            variant="solid"
            borderStartRadius={"6px"}
            borderRadius={0}
            className="damage-rating-button"
          >
            <Text className="rating-button-text">No Damage</Text>
          </Button>
          <Button
            backgroundColor={
              buttonData?.status === "Mi"
                ? "#ECD37B"
                : buttonData?.status === true
                ? "#ECD37B"
                : "#D1D1D1"
            }
            variant="solid"
            borderRadius={0}
            className="damage-rating-button"
          >
            <Text className="rating-button-text"> Minor</Text>
          </Button>
          <Button
            backgroundColor={
              buttonData?.status === "Mo"
                ? "#ECA47B"
                : buttonData?.status === true
                ? "#ECA47B"
                : "#B5B5B5"
            }
            variant="solid"
            borderRadius={0}
            className="damage-rating-button"
          >
            <Text className="rating-button-text"> Moderate</Text>
          </Button>
          <Button
            backgroundColor={
              buttonData?.status === "S"
                ? "#FC6C72"
                : buttonData?.status === true
                ? "#FC6C72"
                : "#989898"
            }
            variant="solid"
            borderEndRadius={"6px"}
            borderRadius={0}
            className="damage-rating-button"
          >
            <Text className="rating-button-text"> Severe</Text>
          </Button>
        </Box>
        <Box className="blackInfo-container">
          <GiInfo color="white" className="rating-info-icon" />
        </Box>
      </Box>
      <Box h={"23px"} />

      {children}

      {children && <Box h={"50px"} />}
      <Divider borderColor={"#E8E8E8"} borderBottomWidth="2px" />
      <Box h={"20px"} />
    </Box>
  );
};

const NoteBox = ({ heading, desc }: { heading?: string; desc: string }) => {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      borderWidth={"1px"}
      borderColor="#DEDEDE"
      borderRadius={"8px"}
      p="18px"
    >
      <Text color={"#8B8B8B"} fontWeight="bold" fontSize={"12px"}>
        {heading}
      </Text>
      <Text color={"#8B8B8B"} fontWeight="semibold" fontSize={"12px"}>
        {desc}
      </Text>
    </Box>
  );
};

const ImageGallery = () => {
  return (
    <Box display={"flex"} flexDirection="row" overflowX="scroll">
      <Image
        className="assessment-gallery-thumb"
        src="https://images.pexels.com/photos/220762/pexels-photo-220762.jpeg?cs=srgb&dl=pexels-pixabay-220762.jpg&fm=jpg"
      />
      <Image
        className="assessment-gallery-thumb"
        src="https://images.pexels.com/photos/220762/pexels-photo-220762.jpeg?cs=srgb&dl=pexels-pixabay-220762.jpg&fm=jpg"
      />
      <Image
        className="assessment-gallery-thumb"
        src="https://images.pexels.com/photos/220762/pexels-photo-220762.jpeg?cs=srgb&dl=pexels-pixabay-220762.jpg&fm=jpg"
      />
      <Image
        className="assessment-gallery-thumb"
        src="https://images.pexels.com/photos/220762/pexels-photo-220762.jpeg?cs=srgb&dl=pexels-pixabay-220762.jpg&fm=jpg"
      />
    </Box>
  );
};

const AssessmentDetail = () => {
  return (
    <Box display={"flex"} flexDirection="column" pl={"60px"} width={"85%"}>
      <Box display={"flex"} flexDirection="row" marginY="22px">
        <Box
          flex={0.4}
          flexDirection="row"
          display={"flex"}
          alignItems={"center"}
        >
          <AiOutlineLeft size={20} />
          <Text fontSize={20} color="black" ml={"5px"}>
            Bridge 029008C Assessment 5/22/22{" "}
          </Text>
        </Box>
      </Box>
      <Box>
        <Box flexDirection={"row"} display="flex">
          <Text fontSize={"13px"} lineHeight="18px" color="black" mr="10px">
            Inspection By:
          </Text>
          <Text fontWeight={"bold"} fontSize={"14px"} color="black">
            Justin Smith
          </Text>
        </Box>
        <Box flexDirection={"row"} display="flex">
          <Text fontSize={"13px"} lineHeight="18px" color="black" mr="10px">
            Inspection Time & Date:
          </Text>
          <Text fontWeight={"bold"} fontSize={"14px"} color="black">
            May 22nd, 2022, 3:45 PM
          </Text>
        </Box>{" "}
      </Box>
      <DamageSection title="Overall Damage" buttonData={{ status: true }} />
      <DamageSection title="Approach Damage">
        <ImageGallery />
      </DamageSection>
      <DamageSection title="Deck Damage" buttonData={{ status: "ND" }}>
        <Box display={"flex"} flexDirection="column">
          <ImageGallery />
          <Box h={21} />
          <NoteBox
            heading="Note 1"
            desc=" Note 1 this is an example of a note that has been added and would show
        you the first two lines....this is an example of a note that has been
        added and would show you the first two lines....this is an example of a
        note that has been added and would show you the first two lines....this
        is an example of a note that has been added and would show you the first
        two lines....this is an example of a note that has been added and would
        show you the first two lines....this is an example of a note that has
        been added and would show you the first two lines....this is an example
        of a note that has been added and would show you the first two
        lines....this is an example of a note that has been added and would show
        you the first two lines...."
          />
        </Box>
      </DamageSection>
      <DamageSection
        title="SuperStructure Damage"
        buttonData={{ status: "Mi" }}
      >
        <ImageGallery />
      </DamageSection>
      <DamageSection
        title="Substructure Damage"
        buttonData={{ status: null }}
      />
      <Box>
        <Text color={"black"}>Additional Notess</Text>
        <Box h={"16px"} />
        <NoteBox desc="This is an example of some sample text. This is a detailed report that is so informative. Take a look at the details and let me know what you think." />
      </Box>
      <ImageViewer imagesData={null} />
    </Box>
  );
};

export default AssessmentDetail;
