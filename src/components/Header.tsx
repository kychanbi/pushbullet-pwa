import React, {MouseEventHandler} from 'react';
import {Flex, Box, useTheme, IconButton, Center, Text, Heading} from '@chakra-ui/react';
import {ChevronRightIcon} from '@chakra-ui/icons';

interface HeaderProps {
  isSidebarOpen: boolean,
  onShowSidebar: MouseEventHandler<HTMLButtonElement>
}
const Header = ({isSidebarOpen,onShowSidebar}:HeaderProps) => {

  return (
    <Flex>
      <Box flex={1}>
        { isSidebarOpen ||
          <IconButton
            icon={<ChevronRightIcon w={8} h={8} />}
            colorScheme="whatsapp"
            variant="outline"
            onClick={onShowSidebar}
            aria-label={''}
          />
        }
      </Box>
      <Center flex={2.5} h="3em">
        <Heading color={'green'} fontSize="lg">Pushbullet PWA (unofficial)</Heading>
      </Center>
      <Box flex={1}/>
    </Flex>
  );
};

export default Header;
