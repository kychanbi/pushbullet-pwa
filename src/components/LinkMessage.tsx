import React from 'react';
import {MessageTypes} from './PushMessage';
import {Box, Center, Link, Text} from '@chakra-ui/react';
import {timestampToDateString} from '../utils';

export interface LinkMessageProps {
  type: MessageTypes.link;
  url: string;
  title: string;
  modified: number;
}

export const LinkMessage = ({url, title, modified}: LinkMessageProps) => {
  const date = timestampToDateString(modified);
  return (
    <Box borderWidth={1} w={'100%'} borderRadius={'lg'} p={'1em'} borderColor={'blue.200'}>
      <Link href={url} isExternal color={'blue.400'}>{url}</Link>
      <Text>{title}</Text>
      <Text fontSize={'xs'} float={'right'}>{date}</Text>
    </Box>
  );
};
