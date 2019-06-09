import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { text: props.text };
  }

  saveText = (e) => {
    this.setState({ text: e.target.value });
  }

  render () {
    const { text } = this.state;

    return (
      <Fragment>
        <h1>Hello World</h1>
        <label htmlFor="text-entry">Enter:</label>
        <input id="text-entry" onChange={ e => this.saveText(e) } type="text" />
        <p>{ text }</p>
      </Fragment>
    );
  }
};

App.propTypes = {
  text: PropTypes.string.isRequired,
}

export default App;
