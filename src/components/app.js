import React from 'react';

class App extends React.Component {
  state = { text: '' };

  saveText = (e) => {
    this.setState({ text: e.target.value });
  }

  render () {
    const { location } = this.props;
    const { text } = this.state;

    return (
      <React.Fragment>
        <h1>{ `Hello World from the ${location}` }</h1>
        <label htmlFor="text-entry">Enter:</label>
        <input id="text-entry" onChange={ e => this.saveText(e) } type="text" />
        <p>{ text }</p>
      </React.Fragment>
    );
  }
};

export default App;
