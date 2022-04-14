import React, { ReactText } from 'react';
import { IconType } from 'react-icons';
import { FlexProps } from '../helpers/interfaces';
import { Link as RouteLink } from 'react-router-dom';
import { Flex, Icon, Link, Text, useColorModeValue } from '@chakra-ui/react';

interface Props extends FlexProps {
  icon: IconType;
  children: ReactText;
  to?: any;
  onClick?: () => void;
}

const NavItem: React.FC<Props> = ({ icon, children, to, onClick, ...rest }) => {
  const textColor = useColorModeValue('gray.600', 'white');
  const hovertextColor = useColorModeValue('white', 'gray.100');

  return (
    <div onClick={onClick}>
      <RouteLink to={to}>
        <Link
          href='#'
          style={{ textDecoration: 'none' }}
          _focus={{ boxShadow: 'none' }}
        >
          <Flex
            align='center'
            p={2.5}
            my={4}
            mx='4'
            borderRadius='lg'
            role='group'
            cursor='pointer'
            _hover={{
              bg: 'purple.400',
              color: 'white',
            }}
            {...rest}
          >
            {icon && (
              <Icon
                mr='4'
                fontSize='16'
                _groupHover={{
                  color: 'white',
                }}
                as={icon}
              />
            )}
            <Text
              fontSize='sm'
              color={textColor}
              fontWeight='bold'
              pb='.1rem'
              _groupHover={{
                color: hovertextColor,
              }}
            >
              {children}
            </Text>
          </Flex>
        </Link>
      </RouteLink>
    </div>
  );
};

export default NavItem;
