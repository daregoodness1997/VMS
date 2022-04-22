import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Card, CardBody, CardHeader } from '../../components';
import { UserRow } from '../../components/Card';
import { topUserData } from '../../helpers/data';

const TopUser = () => {
  const textColor = useColorModeValue('gray.700', 'white');

  return (
    <Card h={96}>
      <CardHeader p='22px 0px 0px 14px'>
        <Flex direction='column'>
          <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem'>
            Top Users
          </Text>
        </Flex>
      </CardHeader>
      <CardBody p={4} mb='31px' position='relative' h={'80%'} overflowY='auto'>
        <Flex direction='column'>
          {topUserData.map((row, index) => {
            return (
              <UserRow
                logo={row.logo}
                name={row.name}
                email={row.email}
                number={row.number}
                key={index}
              />
            );
          })}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default TopUser;
