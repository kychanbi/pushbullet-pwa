import {Overmind} from 'overmind';
import {Context} from '../../overminder';
import {StateType} from '../state';

const getAllPushes = (context: Context) => {};

export const setAccessToken = (context: Context, value: string) => {
  context.state.accessToken = value;
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
