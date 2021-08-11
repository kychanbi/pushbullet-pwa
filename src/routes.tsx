import {SettingPage} from './pages/Setting';
import React from 'react';
import {Main} from './pages/Main';

export const ROUTES = {
  SETTING: '/setting',
  MAIN: '/',
};

interface RouteType {
  path: typeof ROUTES[keyof typeof ROUTES];
  exact: boolean;
  comp: () => JSX.Element;
}
export const routes: Array<RouteType> = [
  {
    path: ROUTES.SETTING,
    exact: true,
    comp: SettingPage,
  },
  {
    path: ROUTES.MAIN,
    exact: true,
    comp: Main,
  },
];
