import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import * as React from 'react';
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
