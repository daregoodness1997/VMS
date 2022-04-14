import {
  Box,
  CloseButton,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import {
  adminLinkItems,
  staffLinkItems,
  visitorLinkItems,
} from '../helpers/constants';
import { BoxProps } from '../helpers/interfaces';
import NavItem from './NavItem';

interface Props extends BoxProps {
  onClose: () => void;
}

const ROLE = 'ADMIN';
interface LinkItemProps {
  name: string;
  icon: IconType;
  to: string;
}

const setRoleLinks = (role: string) => {
  if (role === 'ADMIN') return adminLinkItems;
  else if (role === 'STAFF') return staffLinkItems;
  return visitorLinkItems;
};
const LinkItems: Array<LinkItemProps> = setRoleLinks(ROLE);

const SideNav: React.FC<Props> = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight='1px'
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos='fixed'
      h='full'
      {...rest}
    >
      <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
        <Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>
          VMS
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map(link => (
        <NavItem
          key={link.name}
          icon={link.icon}
          to={link.to}
          onClick={onClose}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

export default SideNav;
