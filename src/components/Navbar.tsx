import { Flex, useColorMode } from '@chakra-ui/react';
import React from 'react';
import Button from './Button';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'light'}
      </Button>
    </Flex>
  );
};

export default Navbar;
