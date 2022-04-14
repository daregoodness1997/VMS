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
import TopUser from './DataGrids/TopUser';
import VisitorsHistory from './DataGrids/VisitorsHistory';
// import { textColor } from '../helpers/constants';

const DataGroup = () => {
  return (
    <Grid
      templateColumns={{ sm: '1fr', md: '1fr 1fr', lg: '2fr 1fr' }}
      templateRows={{ sm: '1fr auto', md: '1fr', lg: '1fr' }}
      gap='24px'
      m='20px 0'
    >
      <VisitorsHistory />

      <TopUser />
    </Grid>
  );
};

export default DataGroup;
