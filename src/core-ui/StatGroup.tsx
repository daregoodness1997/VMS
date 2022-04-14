import { SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import { StatCard } from '.';

import { overviewData } from '../helpers/data';

const StatGroup = () => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'>
      {overviewData.map((data, index) => (
        <StatCard data={data} key={index} />
      ))}
    </SimpleGrid>
  );
};

export default StatGroup;
