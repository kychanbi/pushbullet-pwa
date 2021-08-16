import React from 'react'
import {MessageTypes} from './PushMessage';
import {Text} from '@chakra-ui/react';

export interface NoteMessageProps {
  type: MessageTypes.note,
  body: string,
}

export const NoteMessage = ({body}:NoteMessageProps)=>{
  return <Text>{body}</Text>
}
