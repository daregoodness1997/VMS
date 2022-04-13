import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

interface Props {
  onClick: (event: MouseEvent) => void;
}

const Button: React.FC<Props> = ({ children, onClick, ...props }) => {
  return (
    <ChakraButton onClick={onClick} {...props}>
      {children}
    </ChakraButton>
  );
};

export default Button;
