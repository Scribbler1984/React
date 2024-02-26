import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    character: {}
  }

  // Usefull when reaching out to an API!
  componentDidMount(){
    console.log("componentDidMount")
  }
  
  render() {
    console.log("render");
    return (
      <h1>Hello</h1>
    );
  }
}

export default App;
