import {Context} from '../../overminder';
import {StateType} from '../state';
import React, {ChangeEvent, ChangeEventHandler} from 'react';
import {PushType} from '../../types/Push';

export const fetchAndSetAllPushes = async (context: Context) => {
  const {accessToken} = context.state;
  console.log('fetchAndSetAllPushes', accessToken);
  if (accessToken) {
    const resData = await context.effects.getPushes(accessToken);
    console.log(resData);
    context.state.pushes = resData?.pushes ?? [];
    // context.state.xRateLimitRemaining = res?.headers.xRateLimitRemaining
  }
};

export const fetchAndSetDevices = async (context: Context) =>{
  const {accessToken} = context.state;
  if(accessToken) {
    const resData = await context.effects.getDevices(accessToken);
    console.log(resData);
    context.state.devices = resData?.devices?? []
  }
}

export const setSelectedDevice = (context: Context, event: React.FormEvent<HTMLSelectElement>) =>{
  context.state.selectedDevice = event.currentTarget.value;
}

export const setInputText = (context: Context,event: ChangeEvent<HTMLTextAreaElement>) =>{
  context.state.inputText = event.currentTarget.value;
}

export const sendPush = (context: Context, ) => {
  const {selectedDevice, inputText, accessToken} = context.state;
  const newPush: PushType = {
    type: 'note',
    title: 'Sent from PWA',
    body: inputText??''
  }
  if (selectedDevice){
    const res = context.effects.sendPush(accessToken, newPush, selectedDevice);
  }
}


export const setAccessToken = (context: Context, value: string) => {
  context.state.accessToken = value;
  localStorage.setItem('accessToken', value);
};

interface SetMainUiParam {
  key: keyof StateType['mainUi'];
  value: StateType['mainUi'][keyof StateType['mainUi']];
}
export const setMainUi = (context: Context, param: SetMainUiParam) => {
  const {key, value} = param;
  context.state.mainUi[key] = value;
};

export const onSidebarShow = (context: Context) => {
  setMainUi(context, {key: 'isSidebarOpen', value: true});
};

export const onSidebarHide = (context: Context) => {
  setMainUi(context, {key: 'isSidebarOpen', value: false});
};

export const initApp = (context: Context) => {
  context.state.accessToken = localStorage.accessToken;
}
