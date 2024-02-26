import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    goOut: "Yes"
  }

  toggleGoOut = () => {
    this.setState(prevState => ({
      goOut: prevState.goOut === "Yes" ? "No" : "Yes"
    }));
  }

  render() {
    return (
      <div>
        <h1>{"Should I go out tonight?"}</h1>
        <div onClick={this.toggleGoOut}>
          <h1>{this.state.goOut}</h1>
        </div>
      </div>
    );
  }
}

export default App;
