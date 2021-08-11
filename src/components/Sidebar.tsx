import React from 'react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  VStack,
} from '@chakra-ui/react';
import {Link, NavLink} from 'react-router-dom';
import {ROUTES} from '../routes';

interface SidebarProps {
  isSidebarOpen: boolean;
  onSidebarHide: () => void;
}
const SettingButton = ()=>(<Button w="100%">
  Setting
</Button>)
const Sidebar = ({isSidebarOpen, onSidebarHide}: SidebarProps) => {
  return (
    <>
      <Drawer isOpen={isSidebarOpen} placement="left" onClose={onSidebarHide}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Chakra-UI</DrawerHeader>
            <DrawerBody>
              <VStack>
                {/* MenuItems are not rendered unless Menu is open */}
                <Button w="100%">New Window</Button>
                <Button w="100%">Open Closed Tab</Button>
                <NavLink to={ROUTES.SETTING} component={SettingButton} />
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Sidebar;
