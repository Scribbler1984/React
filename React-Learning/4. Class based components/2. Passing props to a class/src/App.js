import React, { Component } from 'react';
import './App.css';

/*
function App() {
  return (
    <div>
      
    </div>
  );
}

export default App;
*/

class App extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.type}</h1>
      </div>
    );
  }
}

export default App;
