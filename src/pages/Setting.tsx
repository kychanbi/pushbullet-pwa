import React from 'react';
import {
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  FormLabel,
} from '@chakra-ui/react';
import {useActions, useAppState} from '../overminder';
import {setAccessToken} from '../overminder/actions';

export const SettingPage = () => {
  const {accessToken} = useAppState();
  const {setAccessToken} = useActions();
  return (
    <Box px={'0.5em'}>
      <FormLabel>Access Token</FormLabel>
      <Editable
        borderColor={'teal'}
        borderRadius={6}
        borderWidth={1}
        p={1}
        defaultValue={accessToken || 'input here'}
        onChange={setAccessToken}
      >
        <EditablePreview />
        <EditableInput />
      </Editable>
    </Box>
  );
};
