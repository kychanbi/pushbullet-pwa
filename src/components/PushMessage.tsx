import React from 'react';
import {LinkMessage, LinkMessageProps} from './LinkMessage';
import {NoteMessage, NoteMessageProps} from './NoteMessage';

export enum MessageTypes {
  link = 'link',
  note = 'note',
}



export type PushMessageProps = LinkMessageProps | NoteMessageProps;

export const PushMessage = (props: PushMessageProps) => {
  switch (props.type) {
    case MessageTypes.link:
      return <LinkMessage type={props.type} url={props.url} title={props.title} />
    case MessageTypes.note:
      return  <NoteMessage type={props.type} body={props.body} />
  }
};
