import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Card, CardBody, CardHeader } from '../../components';
import { UserRow } from '../../components/Card';
import { topUserData } from '../../helpers/data';

const TopUser = () => {
  const textColor = useColorModeValue('gray.700', 'white');

  return (
    <Card>
      <CardHeader p='22px 0px 0px 14px'>
        <Flex direction='column'>
          <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem'>
            Top Users
          </Text>
        </Flex>
      </CardHeader>
      <CardBody ps='20px' pe='0px' mb='31px' position='relative'>
        <Flex direction='column'>
          {topUserData.map((row, index, arr) => {
            return (
              <UserRow
                logo={row.logo}
                name={row.name}
                email={row.email}
                number={row.number}
              />
            );
          })}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default TopUser;
