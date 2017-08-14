import React from 'react';
import ReactDOM from 'react-dom';

const HelloMessage = React.createClass({
  render() {
    return <div>Hello, {this.props.name}!</div>;
  }
});

let mountNode = document.getElementById("root");
ReactDOM.render(<HelloMessage name="radin" />, mountNode);
