import React from 'react';
// import './App.css';
import Sidebar from './components/Sidebar';
import {Box} from '@chakra-ui/react';
import Header from './components/Header';
import {useActions, useAppState} from './overminder';
import {BrowserRouter, Route} from 'react-router-dom';
import {routes} from './routes';
function App() {
  const {mainUi} = useAppState();
  const {onSidebarShow, onSidebarHide} = useActions();
  return (
    <BrowserRouter>
      <Sidebar
        isSidebarOpen={mainUi.isSidebarOpen}
        onSidebarHide={onSidebarHide}
      />
      <Box>
        <Header
          onShowSidebar={onSidebarShow}
          isSidebarOpen={mainUi.isSidebarOpen}
        />
      </Box>
      {
        routes.map( (r,i)=>
          <Route
            key={'route_'+i}
            path={r.path}
            exact={r.exact}
            component={r.comp}
        />)
      }
    </BrowserRouter>
  );
}

export default App;
