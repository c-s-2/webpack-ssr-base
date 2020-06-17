import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const App = ({ text }) => {
  const [textContent, setTextContent] = useState(text);

  return (
    <Fragment>
      <h1>Hello World</h1>
      <label htmlFor="text-entry">Enter:</label>
      <input id="text-entry" onChange={ e => setTextContent(e.target.value) } type="text" />
      <p>{ textContent }</p>
    </Fragment>
  )
};

App.defaultProps = {
  text: '',
}

App.propTypes = {
  text: PropTypes.string,
}

export default App;
