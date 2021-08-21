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
import {ChevronLeftIcon} from '@chakra-ui/icons';
import "../scss/sidebar.scss";

interface SidebarProps {
  isSidebarOpen: boolean;
  onSidebarHide: () => void;
}

interface ButtonProps {
  onClick: MouseEventHandler;
}

const SettingButton = ({onClick}: ButtonProps) => (
  <Button colorScheme={'whatsapp'} onClick={onClick} w="100%">
    Setting
  </Button>
);
const HomeButton = ({onClick}: ButtonProps) => (
  <Button colorScheme={'whatsapp'} onClick={onClick} w="100%">
    Home
  </Button>
);


const ClosingButton = ({onClick, }:ButtonProps) =>(
  <div onClick={onClick} className={'sidebarCloseBtn'}>
    <ChevronLeftIcon fontSize={'3em'}/>
  </div>
)

const Sidebar = ({isSidebarOpen, onSidebarHide}: SidebarProps) => {
  return (
    <>
      <Drawer isOpen={isSidebarOpen} placement="left" onClose={onSidebarHide}>
        <DrawerOverlay>
          <DrawerContent>
            {/*<DrawerCloseButton />*/}
            {/*<DrawerHeader></DrawerHeader>*/}
            <DrawerBody>
              <VStack zIndex={1} position={'relative'}>
                <NavLink to={ROUTES.MAIN} Component={HomeButton} />
                <NavLink to={ROUTES.SETTING} Component={SettingButton} />
              </VStack>
              <ClosingButton onClick={onSidebarHide}/>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Sidebar;
