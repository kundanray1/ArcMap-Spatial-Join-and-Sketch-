import { Skeleton, Td, Tr } from '@chakra-ui/react';

import React from 'react';

export interface TableSkeletonLoaderProps {
  rows?: number;
  cols?: number;
}

const TableSkeletonLoader: React.FC<TableSkeletonLoaderProps> = (props) => {
  const { rows = 3, cols = 6 } = props;
  return (
    <>
      {Array(rows)
        .fill(0)
        .map((_, rowIndex: number) => (
          <Tr key={rowIndex}>
            {Array(cols)
              .fill(0)
              .map((_, colIndex) => (
                <Td key={colIndex}>
                  <Skeleton height="15px" />
                </Td>
              ))}
          </Tr>
        ))}
    </>
  );
};

export default TableSkeletonLoader;
