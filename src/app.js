import React from 'react';
import ReactDOM from 'react-dom';

require('./stylesheets/app.scss');

const App = () => (
  <React.Fragment>
    <h1>Hello World</h1>
  </React.Fragment>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

module.hot.accept();
