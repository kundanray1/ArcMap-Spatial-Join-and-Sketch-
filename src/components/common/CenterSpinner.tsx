import { Center, Spinner } from '@chakra-ui/react';
import React from 'react';

export const CenterSpinner: React.FC = () => {
  return (
    <Center h="calc(100vh - 128px)" color="primary.500">
      <Spinner />
    </Center>
  );
};
