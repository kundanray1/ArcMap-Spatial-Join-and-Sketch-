import { Tag, Text } from '@chakra-ui/react';
import React from 'react';

interface Props {
  bg?: string;
  rounded?: string;
  color?: string;
  fontSize?: string;
  size?: string;
  status?: boolean;
  name: string;
  type?: string;
  fontWeight?: string;
}

const CustomTagTitle: React.FC<Props> = ({
  bg = 'gray.50',
  color = 'gray.300',
  type = 'tag',
  ...props
}) => {
  const { rounded, fontSize, size, status, name } = props;

  const getName = () => {
    if (!status && type === 'tag') {
      return (
        <Tag
          bg={bg}
          rounded={rounded}
          color={color}
          fontSize={fontSize}
          size={size}>
          {name}
        </Tag>
      );
    }
    if (!status && type === 'text') {
      return (
        <Text color={color} fontSize={fontSize} size={size}>
          {name}
        </Text>
      );
    }
    return (
      <Text
        fontWeight="medium"
        color="gray.500"
        _hover={{ color: 'gray.600' }}
        whiteSpace="nowrap">
        {name}
      </Text>
    );
  };

  return <>{getName()}</>;
};

export default CustomTagTitle;
