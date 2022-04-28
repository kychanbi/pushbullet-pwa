import React from 'react';
import {Center, Link, ListItem, OrderedList, Text} from '@chakra-ui/react';

const Help = () => {
  return (
    <Center>
      <OrderedList>
        <ListItem>For first time use, go to <Link color={'green'} isExternal href={'https://www.pushbullet.com/#settings'}>https://www.pushbullet.com/#settings</Link> </ListItem>
        <ListItem>
         Go to Account -{'>'} Access Tokens{' '}
        </ListItem>
        <ListItem> Click "Create Access Token" </ListItem>
        <ListItem>Copy the tokens generated </ListItem>
        <ListItem>
          Go back to this App -{'>'} setting -{'>'} paste the access token
        </ListItem>
      </OrderedList>
    </Center>
  );
};

export default Help;
