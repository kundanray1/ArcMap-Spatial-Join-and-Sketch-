import { ChakraProvider } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import OrganizationResource from "api/organizations";
import { OrganizationListItem } from "components/organization/OrganizationListItem";
import { DEFAULT_PAGE_SIZE, INITIAL_CURRENT_PAGE } from "constants/common";
import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import {
  getOrganizationListCompatibleData,
  getStartingSerialNumber,
} from "utils";

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
const OrganizationList: React.FC = () => {
  const api = new OrganizationResource();

  const [totalData, setTotalData] = useState<number | undefined>(undefined);
  const [OrganizationData, setOrganizationData] = useState<any>();
  const [filterParams, setFilterParams] = useState<FilterParams>({
    currentPage: INITIAL_CURRENT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
    keyword: "",
  });
  const { data: dataList, isLoading: isListLoading } = useQuery(
    [
      "organizationList",
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

      const getOrganizationData = await getOrganizationListCompatibleData(
        response?.data?.data
      );
      if (getOrganizationData.length > 0)
        setOrganizationData(getOrganizationData);
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

  const columnHelper = createColumnHelper<TableHeader>();

  const columns = [
    columnHelper.accessor("name", {
      cell: (info) => info.getValue(),
      header: "Name",
    }),
    columnHelper.accessor("email", {
      cell: (info) => info.getValue(),
      header: "Email",
    }),
    columnHelper.accessor("status", {
      cell: (info) => info.getValue(),
      header: "Status",
    }),
    columnHelper.accessor("date_added", {
      cell: (info) => info.getValue(),
      header: "Date Added",
    }),
  ];

  const data: TableHeader[] = [
    {
      id: 1,
      name: "ASushan Shrestha",
      email: "sushan.shrestha@outcodesoftware.com",
      status: false,
      date_added: "2022/12/04",
      action: "action",
    },
    {
      name: "CSushan Shrestha",
      id: 2,
      email: "sushan.shrestha@outcodesoftware.com",
      status: false,
      date_added: "2022/12/04",
      action: "action",
    },
    {
      id: 3,
      name: "BSushan Shrestha",
      email: "sushan.shrestha@outcodesoftware.com",
      status: false,
      date_added: "2022/12/04",
      action: "action",
    },
    {
      id: 4,
      name: "AASushan Shrestha",
      email: "sushan.shrestha@outcodesoftware.com",
      status: false,
      date_added: "2022/12/04",
      action: "action",
    },
  ];

  return (
    <ChakraProvider>
      <OrganizationListItem columns={columns} data={data} />
    </ChakraProvider>
  );
};
export default OrganizationList;
