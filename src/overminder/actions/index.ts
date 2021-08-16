import {Context} from '../../overminder';
import {StateType} from '../state';

export const fetchAndSetAllPushes = async (context: Context) => {
  const {accessToken} = context.state;
  console.log('fetchAndSetAllPushes',accessToken);
  if(accessToken) {
    const res = await context.effects.getPushes(accessToken);
    console.log(res);
    context.state.pushes = res.pushes
  }
};

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
