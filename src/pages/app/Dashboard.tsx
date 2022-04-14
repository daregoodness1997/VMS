import React, { ReactNode } from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { DataGroup, Navbar, SideNav, StatGroup } from '../../core-ui';
import { Outlet } from 'react-router-dom';

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome },
  { name: 'Trending', icon: FiTrendingUp },
  { name: 'Explore', icon: FiCompass },
  { name: 'Favourites', icon: FiStar },
  { name: 'Settings', icon: FiSettings },
];

export default function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH='100vh' bg={useColorModeValue('gray.100', 'gray.900')}>
      <SideNav
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size='full'
      >
        <DrawerContent>
          <SideNav onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <Navbar onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p='4'>
        <Outlet />
        <StatGroup />
        <DataGroup />
      </Box>
    </Box>
  );
}
