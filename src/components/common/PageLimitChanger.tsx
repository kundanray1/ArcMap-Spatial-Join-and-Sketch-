import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import { PAGE_LIMITS } from 'constants/common';
import * as React from 'react';

export interface PageLimitChangerProps {
  pageSize: number | string;
  setPageSize: (page: number) => void;
}

const PageLimitChanger: React.FC<PageLimitChangerProps> = (props) => {
  const { pageSize, setPageSize } = props;
  return (
    <FormControl display="flex" alignItems="center" justifyContent="flex-end">
      <FormLabel
        color="gray.400"
        fontSize="md"
        fontWeight="normal"
        mb={0}
        minWidth="70px">
        Show Rows
      </FormLabel>
      <Select
        size="sm"
        variant="filled"
        bgColor="white"
        width="35"
        value={pageSize}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setPageSize(+e.target.value)
        }>
        {PAGE_LIMITS.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default PageLimitChanger;
