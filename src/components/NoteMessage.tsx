import React from 'react';
import {MessageTypes} from './PushMessage';
import {Box, Text} from '@chakra-ui/react';
import {timestampToDateString} from '../utils';

export interface NoteMessageProps {
  type: MessageTypes.note;
  body: string;
  modified: number;
}

export const NoteMessage = ({body, modified}: NoteMessageProps) => {
  const date = timestampToDateString(modified);
  return (
    <Box
      borderWidth={1}
      w={'100%'}
      borderRadius={'lg'}
      p={'0.5em 1em'}
      borderColor={'blue.100'}>
      <Text>{body}</Text>
      <Text fontSize={'xs'} float={'right'}>{date}</Text>
    </Box>
  );
};
