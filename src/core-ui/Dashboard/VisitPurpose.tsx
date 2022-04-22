import { AddIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import { Card, CardHeader, VisitationRow } from '../../components';
import { StaffRow } from '../../components/Tables';
// import { textColor } from '../../helpers/constants';
import { staffsData } from '../../helpers/data';

const VisitPurpose = () => {
  const textColor = useColorModeValue('gray.700', 'white');
  let visitations = 40;
  return (
    <Card p='16px' overflowX={{ sm: 'scroll', xl: 'hidden' }}>
      <CardHeader p='12px 0px 28px 0px'>
        <Flex direction='column'>
          <Flex justify='space-between'>
            <Text fontSize='xl' color={textColor} fontWeight='bold' pb='.5rem'>
              Visit Purpose
            </Text>
            <Button
              variant={'solid'}
              colorScheme={'purple'}
              size={'md'}
              mr={4}
              leftIcon={<AddIcon />}
            >
              Create Visit Purpose
            </Button>
          </Flex>
        </Flex>
      </CardHeader>
      <Table variant='simple' color={textColor}>
        <Thead>
          <Tr my='.8rem' ps='0px'>
            <Th ps='0px' color='gray.400'>
              ID
            </Th>
            <Th color='gray.400'>Full Name</Th>
            <Th color='gray.400'>Email</Th>
            <Th color='gray.400'>Department</Th>
            <Th color='gray.400'>Mobile Number</Th>
            <Th color='gray.400'>Date of Birth</Th>
            <Th color='gray.400'>Status</Th>
            <Th color='gray.400'>Role</Th>
            <Th color='gray.400'>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {staffsData.map(row => {
            return <StaffRow {...row} key={row.id} />;
          })}
        </Tbody>
      </Table>
    </Card>
  );
};

export default VisitPurpose;
