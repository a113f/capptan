import React from 'react';
import Routes from './routes/';
import storeConfig from './store/';
import { Provider } from 'react-redux';

const store = storeConfig();

const App = () =>
  <Provider store={store}>
    <Routes />
  </Provider>

export default App;
