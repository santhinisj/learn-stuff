import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Third from './Third';
// import Second
import Second from './Second';

class App extends Component {
  state={
    hello:['hi']
  }
  render() {
    return (
      <div>
      <Second appValues={this.state} />
      <h1>This is the first Component</h1>
      <Third appValues={this.state}/>
      </div>
    );
  }
}

export default App;
