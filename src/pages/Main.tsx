import React, {useEffect} from 'react';
import {Center, Container, Text, VStack} from '@chakra-ui/react';
import {useActions, useAppState} from '../overminder';
import {PushMessage, PushMessageProps} from '../components/PushMessage';

interface MessageContainerProps {
  messages: Array<PushMessageProps>;
}

const MessageContainer = ({messages}: MessageContainerProps) =>  {
  return (
    <VStack maxW={'100%'} p={'0.5em'}>
      {messages.map((m, i) => (
        <PushMessage key={'push' + i} {...m} />
      ))}
    </VStack>
  );
};

export const Main = () => {
  const {fetchAndSetAllPushes} = useActions();
  const {pushes,accessToken} = useAppState();
  useEffect(() => {
    fetchAndSetAllPushes();
  }, [accessToken]);
  return (
    <Container maxW={'100vw'}>
      <MessageContainer messages={pushes} />
    </Container>
  );
};
