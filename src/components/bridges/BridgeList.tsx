import {
  Box,
  ChakraProvider,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
} from "@chakra-ui/react";
import BridgesJson from "assets/polygons/bridge.json";
import { DEFAULT_PAGE_SIZE, INITIAL_CURRENT_PAGE } from "constants/common";
import React, { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { getStartingSerialNumber } from "utils";
import BridgeListCard from "./BridgeListCard";

interface FilterParams {
  currentPage: number;
  pageSize: number;
  keyword: string;
}

type TableHeader = {
  id: number;
  name: string;
  email: string;
  status: boolean;
  date_added: string;
  action?: string;
};
const BridgeList: React.FC = () => {
  const data = BridgesJson;
  const [totalData, setTotalData] = useState<number | undefined>(undefined);
  const [userData, setUserData] = useState<any>();
  const [filterParams, setFilterParams] = useState<FilterParams>({
    currentPage: INITIAL_CURRENT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
    keyword: "",
  });

  // function loadData() {
  //   // const blobBridge = new Blob([JSON.stringify(BridgesJson)], {
  //   //   type: "application/json",
  //   // });
  //   // let BridgeObject = JSON.parse(blobBridge);
  //   return blobBridge;
  // }

  const filterList = async (data: any) => {
    setFilterParams((prevState) => ({
      ...prevState,
      currentPage: INITIAL_CURRENT_PAGE,
      is_approved: data.is_approved || 0,
      search: data.name,
    }));
  };
  const handlePageChange = (nextPage: number) => {
    setFilterParams((prevState) => ({
      ...prevState,
      currentPage: nextPage,
    }));
  };

  /**
   * Handle reset filter params
   */

  const startingSN = useMemo(() => {
    return getStartingSerialNumber(
      filterParams.currentPage,
      filterParams.pageSize
    );
  }, [filterParams.currentPage, filterParams.pageSize]);

  /**
   * Handle filter params submit
   */
  const onSubmit = (data: any) => {
    filterList(data);
  };

  return (
    <ChakraProvider>
      <Flex
        bgColor="blackAlpha.50"
        justifyContent={"flex-start"}
        align="center"
        pt="13"
        flexDir={"column"}
        // h="950px"
        // gap={10}
      >
        <InputGroup
          bgColor={"Background"}
          borderRadius="6"
          w={"90%"}
          // display="flex"
          h="min"
          py="5px"
          // verticalAlign="center"
          display="flex"
        >
          <InputLeftElement
            pointerEvents="none"
            color="#333333"
            fontSize="1em"
            alignSelf={"center"}
            position="relative"
            children={<FiSearch />}
          />
          <Input
            placeholder="Search"
            color="#333333"
            _placeholder={{ opacity: 1, color: "#333333" }}
            borderWidth="0"
            h={"40px"}
            padding="0"
            focusBorderColor="null"
          />

          {/* <InputRightElement children={<CheckIcon color="green.500" />} /> */}
        </InputGroup>
        <Box minHeight={"30px"} />
        <Box w={"90%"}>
          <Select
            variant="outline"
            placeholder="Filter"
            bgColor={"white"}
            w="40%"
            h={"40px"}
            borderWidth="1px"
            borderColor={"#44474A"}
          />
        </Box>
        <Box minHeight={"20px"} />
        <Box maxH={"calc(100vh - 24vh)"} overflowY={"scroll"} ml="5px">
          {BridgeListCard(data)}
        </Box>
      </Flex>
    </ChakraProvider>
  );
};
export default BridgeList;
