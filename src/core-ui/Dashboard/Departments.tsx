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
import { Card, CardHeader } from '../../components';
import { DepartmentRow } from '../../components/Tables';
// import { textColor } from '../../helpers/constants';
import { departmentData } from '../../helpers/data';

const Departments = () => {
  const textColor = useColorModeValue('gray.700', 'white');
  return (
    <Card p='16px' overflowX={{ sm: 'scroll', xl: 'hidden' }}>
      <CardHeader p='12px 0px 28px 0px'>
        <Flex direction='column'>
          <Flex justify='space-between'>
            <Text fontSize='xl' color={textColor} fontWeight='bold' pb='.5rem'>
              Departments
            </Text>
            <Button
              variant={'solid'}
              colorScheme={'purple'}
              size={'md'}
              mr={4}
              leftIcon={<AddIcon />}
            >
              Create Department
            </Button>
          </Flex>
        </Flex>
      </CardHeader>
      <Table variant='simple' color={textColor}>
        <Thead>
          <Tr my='.8rem'>
            <Th color='gray.400'>ID</Th>
            <Th color='gray.400'>Name</Th>
            <Th color='gray.400'>State</Th>
            <Th color='gray.400'>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {departmentData.map((row, index) => {
            return (
              <DepartmentRow
                name={row.name}
                key={index}
                id={row.id}
                status={row.status}
              />
            );
          })}
        </Tbody>
      </Table>
    </Card>
  );
};

export default Departments;
