import React from 'react';
import {Box, Editable, EditableInput, EditablePreview, FormLabel} from '@chakra-ui/react';
import {useActions, useAppState} from '../overminder';
import {setAccessToken} from '../overminder/actions';

export const SettingPage = ()=>{
  const {accessToken} = useAppState();
  const {setAccessToken}= useActions();
  return <Box>
    <FormLabel>Access Token</FormLabel>
    <Editable defaultValue={accessToken || 'input here'} onChange={setAccessToken}>
      <EditablePreview/>
      <EditableInput/>
    </Editable>
  </Box>
}
