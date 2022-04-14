import { Box, useColorModeValue } from '@chakra-ui/react';
interface Props {
  variant?: string;
  minH?: any;
  maxH?: any;
  overflowX?: any;
  p?: any;
}

const Card: React.FC<Props> = ({
  variant,
  children,
  minH,
  maxH,
  overflowX,
  p = 4,
  ...rest
}) => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      borderRadius={4}
      minH={minH}
      maxH={maxH}
      w={'full'}
      p={p}
      overflowX={overflowX}
      borderWidth='1px'
      borderColor={useColorModeValue('gray.50', 'gray.700')}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Card;
