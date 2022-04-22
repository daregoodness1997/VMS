import { Avatar, Box, Flex, useColorModeValue, Text } from '@chakra-ui/react';

interface Props {
  name: string;
  email: string;
  logo: string;
  number: number;
}

const UserRow: React.FC<Props> = ({ name, email, logo, number }) => {
  const textColor = useColorModeValue('gray.700', 'white');
  const bgColor = useColorModeValue('gray.100', 'gray.800');
  const nameColor = useColorModeValue('gray.500', 'white');

  return (
    <Box p='24px' bg={bgColor} my='22px' borderRadius='12px'>
      <Flex justify='space-between' align='center' w='100%'>
        <Flex align='center' py='.4rem' flexWrap='nowrap'>
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
        <Text fontSize='lg' color={textColor} fontWeight='bold'>
          {number}
        </Text>
      </Flex>
    </Box>
  );
};

export default UserRow;
