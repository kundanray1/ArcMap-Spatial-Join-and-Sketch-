import {
  Flex,
  Heading,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import UserResource from "api/user";
import Pagination from "components/common/Pagination";
import TableSkeletonLoader from "components/common/TableSkeletonLoader";
import UserListItem from "components/user/UserListItem";
import { DEFAULT_PAGE_SIZE, INITIAL_CURRENT_PAGE } from "constants/common";
import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { getStartingSerialNumber } from "utils";

interface FilterParams {
  currentPage: number;
  pageSize: number;
  keyword: string;
}

const UserList: React.FC = () => {
  console.log("here=================-");
  const api = new UserResource();

  const [totalData, setTotalData] = useState<number | undefined>(undefined);
  const [filterParams, setFilterParams] = useState<FilterParams>({
    currentPage: INITIAL_CURRENT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
    keyword: "",
  });
  console.log("filterParams===============", filterParams);
  const { data: dataList, isLoading: isListLoading } = useQuery(
    [
      "userList",
      {
        page: filterParams.currentPage,
        limit: filterParams.pageSize,
        keyword: filterParams.keyword,
      },
    ],
    async () => {
      const queryParams: any = {
        page: filterParams.currentPage,
        limit: filterParams.pageSize,
        keyword: filterParams.keyword,
      };
      const response = await api.list(queryParams);
      setTotalData(response?.data?.meta?.total);
      return response?.data;
    }
  );
  const methods = useForm<any>();

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
  const handleReset = () => {
    methods.reset();
    setFilterParams((prevState) => ({
      ...prevState,
      currentPage: INITIAL_CURRENT_PAGE,
      search: "",
      is_approved: 0,
    }));
  };

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
    <>
      <Stack direction="column" spacing="4">
        <Flex justify="space-between">
          <Stack direction="row">
            <Heading size="md">List Client</Heading>
          </Stack>
        </Flex>

        <Stack bg="white" p={["3", "6"]} shadow="box" rounded="sm">
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Company Name</Th>
                  <Th>Office Number</Th>
                  <Th>Address</Th>
                  <Th>Representative Name</Th>
                </Tr>
              </Thead>
              <Tbody>
                {!isListLoading &&
                  dataList?.data?.map((listData: any, index: number) => (
                    <UserListItem
                      listData={listData}
                      key={listData.id}
                      index={startingSN + index}
                    />
                  ))}
                {isListLoading && (
                  <TableSkeletonLoader rows={filterParams.pageSize} cols={7} />
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Stack>

        {dataList?.data && (
          <Pagination
            dataList={dataList}
            filterParams={filterParams}
            setFilterParams={setFilterParams}
          />
        )}
      </Stack>
    </>
  );
};

export default UserList;
