import React, {MouseEventHandler} from 'react';
import {Flex, Box, useTheme, IconButton, Center, Text} from '@chakra-ui/react';
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
            colorScheme="blue"
            variant="outline"
            onClick={onShowSidebar}
            aria-label={''}
          />
        }
      </Box>
      <Center flex={1} h="40px">
        <Text fontSize="xl">Pushbullet PWA (unofficial)</Text>
      </Center>
      <Box flex={1}/>
    </Flex>
  );
};

export default Header;
