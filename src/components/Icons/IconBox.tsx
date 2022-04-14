import React from 'react';
import { Flex } from '@chakra-ui/react';

interface Props {
  as?: any;
  h?: any;
  w?: any;
  bg?: any;
}

const IconBox: React.FC<Props> = ({ children, as, h, w, bg, ...props }) => {
  return (
    <Flex
      alignItems={'center'}
      justifyContent={'center'}
      borderRadius={'12px'}
      as={as}
      h={h}
      w={w}
      bg={bg}
      {...props}
    >
      {children}
    </Flex>
  );
};

export { IconBox };
