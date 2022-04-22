import {
  Avatar,
  Badge,
  Button,
  Flex,
  Icon,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { FaEllipsisV } from 'react-icons/fa';

interface Props {
  id: any;
  name: string;
  status: string;
}

const DepartmentRow: React.FC<Props> = ({ id, name, status }) => {
  const textColor = useColorModeValue('gray.700', 'white');
  const bgStatus = useColorModeValue('gray.300', '#1a202c');
  const colorStatus = useColorModeValue('white', 'gray.400');

  return (
    <Tr>
      <Td>
        <Flex direction='column'>
          <Text fontSize='sm' color={textColor} fontWeight='bold'>
            {id}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Flex direction='column'>
          <Text fontSize='sm' color={textColor} fontWeight='bold'>
            {name}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Badge
          bg={status === 'Active' ? 'green.300' : bgStatus}
          color={status === 'Active' ? 'white' : colorStatus}
          fontSize='12px'
          p='3px 10px'
          borderRadius='8px'
        >
          {status}
        </Badge>
      </Td>

      <Td>
        <Button p='0px' bg='transparent'>
          <Icon as={FaEllipsisV} color='gray.400' cursor='pointer' />
        </Button>
      </Td>
    </Tr>
  );
};

export default DepartmentRow;
