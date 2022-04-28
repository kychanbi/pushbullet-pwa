import React from 'react';
import {Button, Center, Flex, Select, Textarea} from '@chakra-ui/react';
import {useActions, useAppState} from '../overminder';

interface DeviceOptionProps {
  nickname: string;
  iden: string;
}

const DeviceOption = (props: DeviceOptionProps) => {
  return <option value={props.iden}>{props.nickname}</option>;
};

const Writer = () => {
  const {devices, inputText} = useAppState();
  const {setSelectedDevice, setInputText, sendPush} = useActions();
  return (
    <Flex>
      {devices?.length > 0 ? (
        <Center w={'10em'}>
          <Select placeholder={'Select Device'} onChange={setSelectedDevice}>
            {devices.map((device) => (
              <DeviceOption
                key={device.iden}
                nickname={device.nickname}
                iden={device.iden}
              />
            ))}
          </Select>
        </Center>
      ) : (
        <></>
      )}
      <Center p={'1em'} flex={1}>
      <Textarea
        placeholder="Type a message"
        value={inputText}
        onChange={setInputText}
      />
      </Center>
      <Center w={'6em'} p={0}>
        <Button colorScheme="blue" onClick={sendPush}>
          Push
        </Button>
      </Center>
    </Flex>
  );
};

export default Writer;
