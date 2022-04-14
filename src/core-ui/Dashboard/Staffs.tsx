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
// import { textColor } from '../../helpers/constants';
import { visitorHistoryData } from '../../helpers/data';

const Staffs = () => {
  const textColor = useColorModeValue('gray.700', 'white');
  let visitations = 40;
  return (
    <Card p='16px' overflowX={{ sm: 'scroll', xl: 'hidden' }}>
      <CardHeader p='12px 0px 28px 0px'>
        <Flex direction='column'>
          <Flex justify='space-between'>
            <Text fontSize='xl' color={textColor} fontWeight='bold' pb='.5rem'>
              Staffs
            </Text>
            <Button
              variant={'solid'}
              colorScheme={'purple'}
              size={'md'}
              mr={4}
              leftIcon={<AddIcon />}
            >
              Create Staff
            </Button>
          </Flex>
        </Flex>
      </CardHeader>
      <Table variant='simple' color={textColor}>
        <Thead>
          <Tr my='.8rem' ps='0px'>
            <Th ps='0px' color='gray.400'>
              Details
            </Th>
            <Th color='gray.400'>Reason</Th>
            <Th color='gray.400'>Date</Th>
            <Th color='gray.400'>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {visitorHistoryData.map(row => {
            return (
              <VisitationRow
                name={row.name}
                logo={row.logo}
                email={row.email}
                date={row.date}
                reason={row.reason}
                status={row.status}
              />
            );
          })}
        </Tbody>
      </Table>
    </Card>
  );
};

export default Staffs;
