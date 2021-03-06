import {
  Avatar,
  Badge,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

interface Props {
  logo: string;
  name: string;
  email: string;
  date: string;
  reason: string;
  status: string;
}

const VisitationRow: React.FC<Props> = ({
  logo,
  name,
  email,
  date,
  reason,
  status,
}) => {
  const textColor = useColorModeValue('gray.700', 'white');
  const bgStatus = useColorModeValue('gray.300', '#1a202c');
  const colorStatus = useColorModeValue('white', 'gray.400');
  return (
    <Tr>
      <Td minWidth={{ sm: '250px' }} pl='0px'>
        <Flex align='center' py='.8rem' minWidth='100%' flexWrap='nowrap'>
          <Avatar src={logo} w='50px' borderRadius='12px' me='18px' />
          <Flex direction='column'>
            <Text
              fontSize='md'
              color={textColor}
              fontWeight='bold'
              minWidth='100%'
            >
              {name}
            </Text>
            <Text fontSize='sm' color='gray.400' fontWeight='normal'>
              {email}
            </Text>
          </Flex>
        </Flex>
      </Td>

      <Td>
        <Flex direction='column'>
          <Text fontSize='sm' color={textColor} fontWeight='bold'>
            {reason}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Badge
          bg={status === 'Attended' ? 'green.300' : bgStatus}
          color={status === 'Attended' ? 'white' : colorStatus}
          fontSize='12px'
          p='3px 10px'
          borderRadius='8px'
        >
          {status}
        </Badge>
      </Td>
      <Td>
        <Text fontSize='sm' color={textColor} pb='.5rem'>
          {date}
        </Text>
      </Td>
    </Tr>
  );
};

export default VisitationRow;
