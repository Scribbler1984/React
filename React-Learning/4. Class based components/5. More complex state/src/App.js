import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      person: {
        name: 'John',
        age: 30,
        address: {
          city: 'New York',
          country: 'USA'
        }
      }
    };
  }

  updatePerson = () => {
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        age: prevState.person.age + 1
      }
    }));
  };

  render() {
    // Destructuring state for easier access
    const {
      person: { name, age, address }
    } = this.state;

    return (
      <div>
        <h1>Person Information</h1>
        <div>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>City: {address.city}</p>
          <p>Country: {address.country}</p>
          <button onClick={this.updatePerson}>Update Age</button>
        </div>
      </div>
    );
  }
}

export default App;
