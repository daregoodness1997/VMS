import {
  Flex,
  Grid,
  Icon,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { Card, CardBody, CardHeader } from '../components';

const DataGroup = () => {
  const iconTeal = useColorModeValue('teal.300', 'teal.300');
  const iconBoxInside = useColorModeValue('white', 'white');
  const textColor = useColorModeValue('gray.700', 'white');
  return (
    <Grid
      templateColumns={{ sm: '1fr', md: '1fr 1fr', lg: '2fr 1fr' }}
      templateRows={{ sm: '1fr auto', md: '1fr', lg: '1fr' }}
      gap='24px'
      p='20px 0'
    >
      <Card p='16px' overflowX={{ sm: 'scroll', xl: 'hidden' }}>
        <CardHeader p='12px 0px 28px 0px'>
          <Flex direction='column'>
            <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem'>
              Projects
            </Text>
            <Flex align='center'>
              {/* <Icon
                as={IoCheckmarkDoneCircleSharp}
                color='teal.300'
                w={4}
                h={4}
                pe='3px'
              /> */}
              <Text fontSize='sm' color='gray.400' fontWeight='normal'>
                <Text fontWeight='bold' as='span'>
                  30 done
                </Text>
                this month.
              </Text>
            </Flex>
          </Flex>
        </CardHeader>
        <Table variant='simple' color={textColor}>
          <Thead>
            <Tr my='.8rem' ps='0px'>
              <Th ps='0px' color='gray.400'>
                Companies
              </Th>
              <Th color='gray.400'>Members</Th>
              <Th color='gray.400'>Budget</Th>
              <Th color='gray.400'>Completion</Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* {dashboardTableData.map(row => {
              return (
                <DashboardTableRow
                  name={row.name}
                  logo={row.logo}
                  members={row.members}
                  budget={row.budget}
                  progression={row.progression}
                />
              );
            })} */}
          </Tbody>
        </Table>
      </Card>
      <Card maxH='100%'>
        <CardHeader p='22px 0px 35px 14px'>
          <Flex direction='column'>
            <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem'>
              Orders overview
            </Text>
            <Text fontSize='sm' color='gray.400' fontWeight='normal'>
              <Text fontWeight='bold' as='span' color='teal.300'>
                +30%
              </Text>{' '}
              this month.
            </Text>
          </Flex>
        </CardHeader>
        <CardBody ps='20px' pe='0px' mb='31px' position='relative'>
          <Flex direction='column'>
            {/* {timelineData.map((row, index, arr) => {
              return (
                <TimelineRow
                  logo={row.logo}
                  title={row.title}
                  date={row.date}
                  color={row.color}
                  index={index}
                  arrLength={arr.length}
                />
              );
            })} */}
          </Flex>
        </CardBody>
      </Card>
    </Grid>
  );
};

export default DataGroup;
