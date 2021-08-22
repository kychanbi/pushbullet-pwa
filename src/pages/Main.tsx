import React, {useEffect} from 'react';
import {Box, Center, CircularProgress, Container, Divider, Text, VStack} from '@chakra-ui/react';
import {useActions, useAppState} from '../overminder';
import {PushMessage, PushMessageProps} from '../components/PushMessage';
import PullToRefresh from 'react-simple-pull-to-refresh';
import {DownloadIcon} from '@chakra-ui/icons';

interface MessageContainerProps {
  messages: Array<PushMessageProps>;
}

const MessageContainer = ({messages}: MessageContainerProps) => {
  return (
    <VStack maxW={'100%'} p={'0.5em'}>
      <Box w={'100%'}>
        {/*<Divider />*/}
        <Center>
          <DownloadIcon/>
          Pull down to refresh
        </Center>
      </Box>
      {messages.map((m, i) => (
        <PushMessage key={'push' + i} {...m} />
      ))}
    </VStack>
  );
};

export const RefreshingContent = ()=>(
  <CircularProgress isIndeterminate color="green.300" />
)
export const Main = () => {
  const {fetchAndSetAllPushes} = useActions();
  const {pushes, accessToken} = useAppState();
  useEffect(() => {
    fetchAndSetAllPushes();
  }, [accessToken]);
  return (
    <PullToRefresh onRefresh={fetchAndSetAllPushes} pullingContent={''} refreshingContent={<RefreshingContent />} >
      <Container maxW={'100vw'}>
        <MessageContainer messages={pushes} />
      </Container>
    </PullToRefresh>
  );
};
