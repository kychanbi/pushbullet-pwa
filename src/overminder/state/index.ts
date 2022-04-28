import Constants from '../../constants';

export interface StateType {
  pushes: Array<any>;
  xRateLimit: number;
  xRateLimitRemaining: number;
  accessToken: string;
  devices:Array<any>;
  inputText?: string ;
  selectedDevice: string | null;
  mainUi: {
    isSidebarOpen: boolean;
  };
}
export const state: StateType = {
  pushes: [],
  accessToken: '',
  xRateLimit: Constants.defaultXRateLimit,
  xRateLimitRemaining: Constants.defaultXRateLimit,
  selectedDevice: null,
  // inputText: null,
  devices:[],
  mainUi:{
    isSidebarOpen: false,
  }
};
