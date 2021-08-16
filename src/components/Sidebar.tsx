import React, {MouseEventHandler} from 'react';
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
import {ROUTES} from '../routes';
import {NavLink} from './NavLink';

interface SidebarProps {
  isSidebarOpen: boolean;
  onSidebarHide: () => void;
}

interface ButtonProps {
  onClick: MouseEventHandler;
}

const SettingButton = ({onClick}: ButtonProps) => (
  <Button onClick={onClick} w="100%">
    Setting
  </Button>
);
const HomeButton = ({onClick}: ButtonProps) => (
  <Button onClick={onClick} w="100%">
    Home
  </Button>
);
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
                {/*<NavLink to={ROUTES.MAIN}>*/}
                {/*  <HomeButton/>*/}
                {/*</NavLink>*/}
                <NavLink to={ROUTES.MAIN} Component={HomeButton} />

                <NavLink to={ROUTES.SETTING} Component={SettingButton} />
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Sidebar;
