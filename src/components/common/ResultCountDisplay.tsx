/**
 * Component to show result count for a table
 * For eg: Showing 1-15 out of 200
 *
 * Handles loading and no result found as well
 *
 */

import { Text } from '@chakra-ui/react';
import React from 'react';

export interface ResultCountDisplayProps {
  isLoading: boolean;
  totalCount: number | undefined; // total number of items
  resultCount: number; // number of items present in a page
  pageSize: number;
  currentPage: number;
}

const ResultCountDisplay: React.FC<ResultCountDisplayProps> = (props) => {
  const { isLoading, totalCount, resultCount, pageSize, currentPage } = props;
  const lowerCount = pageSize * (currentPage - 1) + 1;
  const upperCount = pageSize * (currentPage - 1) + resultCount;

  return (
    <Text as="span">
      {isLoading && `Loading...`}
      {!isLoading && resultCount > 0 && (
        <>
          Showing {lowerCount} - {upperCount} out of {totalCount}
        </>
      )}
      {!isLoading && resultCount < 1 && 'No Result Found.'}
    </Text>
  );
};

export default ResultCountDisplay;
