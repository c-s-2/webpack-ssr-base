import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

ReactDOM.hydrate(
  <App location="client" />,
  document.getElementById('root')
);

module.hot.accept();
