export interface StateType {
  pushes: Array<any>;
  accessToken: string;
  mainUi: {
    isSidebarOpen: boolean;
  };
}
export const state: StateType = {
  pushes: [],
  accessToken: '',
  mainUi:{
    isSidebarOpen: false,
  }
};
