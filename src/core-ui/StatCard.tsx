import {
  Flex,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { Card, CardBody, IconBox } from '../components';
import { WalletIcon } from '../components/Icons/Icons';
interface Props {
  data: { name: string; number: number; rate: number; icon?: any };
}

const StatCard: React.FC<Props> = ({ data }) => {
  const iconPurple = useColorModeValue('purple.300', 'purple.300');
  const iconBoxInside = useColorModeValue('white', 'white');
  const textColor = useColorModeValue('gray.700', 'white');
  return (
    <Card minH='83px'>
      <CardBody>
        <Flex flexDirection='row' align='center' justify='center' w='100%'>
          <Stat me='auto'>
            <StatLabel
              fontSize='sm'
              color='gray.400'
              fontWeight='bold'
              pb='.1rem'
            >
              {data.name}
            </StatLabel>
            <Flex>
              <StatNumber fontSize='lg' color={textColor}>
                {data.number}
              </StatNumber>
              <StatHelpText
                alignSelf='flex-end'
                justifySelf='flex-end'
                m='0px'
                color={data.rate >= 0 ? 'green.400' : 'red.400'}
                fontWeight='bold'
                ps='3px'
                fontSize='md'
              >
                {data.rate >= 0 ? '+' : ''}
                {`${data.rate}%`}
              </StatHelpText>
            </Flex>
          </Stat>
          <IconBox as='box' h={'45px'} w={'45px'} bg={iconPurple}>
            <WalletIcon h={'24px'} w={'24px'} color={iconBoxInside} />
          </IconBox>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default StatCard;
