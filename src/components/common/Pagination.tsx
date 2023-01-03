import { Flex, Icon, Text } from '@chakra-ui/react';
import { normalStyles } from 'assets/css/commonStyles';

import {
  Pagination as Paginator,
  PaginationContainer as Container,
  PaginationNext as Next,
  PaginationPageGroup as PageGroup,
  PaginationPrevious as Previous,
  usePagination as usePaginator,
} from '@ajna/pagination';

import { DEFAULT_PAGE_SIZE, INITIAL_CURRENT_PAGE } from 'constants/common';
import React, { useEffect, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import PageLimitChanger from './PageLimitChanger';
import ResultCountDisplay from './ResultCountDisplay';

interface Props {
  dataList: any;
  filterParams: any;
  setFilterParams: Function;
}

const Pagination: React.FC<Props> = (props) => {
  let { dataList, filterParams, setFilterParams } = props;
  let { isLoading } = dataList;

  let dataLength = dataList?.results?.length;
  let metaData = dataList?.meta;

  const [totalItems, setTotalItems] = useState<number | undefined>(undefined);

  const { pagesCount: pagesQuantity, setPageSize } = usePaginator({
    total: totalItems,
    initialState: {
      pageSize: DEFAULT_PAGE_SIZE,
      currentPage: INITIAL_CURRENT_PAGE,
    },
    limits: {
      outer: 2,
      inner: 2,
    },
  });

  useEffect(() => {
    if (metaData) {
      setTotalItems(metaData.total);
    }
  }, [metaData]);

  const handlePageChange = (nextPage: number) => {
    setFilterParams((prevState: any) => ({
      ...prevState,
      currentPage: nextPage,
    }));
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
      overflow="auto">
      <Text color="gray.400">
        <ResultCountDisplay
          isLoading={isLoading}
          totalCount={totalItems}
          resultCount={dataLength}
          pageSize={filterParams.pageSize}
          currentPage={filterParams.currentPage}
        />
      </Text>
      <Flex alignItems="center" flexWrap={['wrap', 'nowrap']}>
        {dataLength > 0 && (
          <PageLimitChanger
            pageSize={filterParams.pageSize}
            setPageSize={(value: any) => {
              setFilterParams((prevState: any) => ({
                ...prevState,
                currentPage: INITIAL_CURRENT_PAGE,
                pageSize: value,
              }));
              setPageSize(value);
            }}
          />
        )}
        {!isLoading && pagesQuantity > 1 && (
          <Paginator
            // activeStyles={activeStyles}
            currentPage={filterParams.currentPage}
            // normalStyles={normalStyles}
            // separatorStyles={separatorStyles}
            pagesCount={pagesQuantity}
            onPageChange={handlePageChange}>
            <Container
              align="center"
              justifyContent="flex-end"
              w="full"
              p={1}
              pr={0}
              ml={3}>
              <Previous mr="0.3rem" sx={normalStyles} minWidth={0}>
                <Icon as={BiChevronLeft} fontSize="xl" />
              </Previous>
              <PageGroup isInline align="center" />
              <Next ml="0.3rem" sx={normalStyles} minWidth={0}>
                <Icon as={BiChevronRight} fontSize="xl" />
              </Next>
            </Container>
          </Paginator>
        )}
      </Flex>
    </Flex>
  );
};

export default Pagination;
