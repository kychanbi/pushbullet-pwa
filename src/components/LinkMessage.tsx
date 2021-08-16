import React from 'react';
import {MessageTypes} from './PushMessage';
import {Box, Center, Link, Text} from '@chakra-ui/react';

export interface LinkMessageProps {
  type: MessageTypes.link;
  url: string;
  title: string;
}

export const LinkMessage = ({url, title}: LinkMessageProps) => {
  return (
    <Box borderWidth={1} maxW={'100%'} borderRadius={'md'} p={'6'}>
      <Link href={url} isExternal color={'teal.500'}>{url}</Link>
      <Text>{title}</Text>
    </Box>
  );
};
