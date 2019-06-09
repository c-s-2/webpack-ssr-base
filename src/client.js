import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

const initialState = window.__STATE__;
delete window.__STATE__;

ReactDOM.hydrate(
  <App { ...initialState } />,
  document.getElementById('root')
);

module.hot.accept();
