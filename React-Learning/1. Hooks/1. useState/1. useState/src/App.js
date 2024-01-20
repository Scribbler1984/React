import './App.css';
import { useState } from 'react';

/*

The useState() Hook
----------------------------------------------------------------------------------------------------------------------------------------

In React, the useState() hook is a powerful tool for managing state within functional components. React is a popular JavaScript library 
used for building user interfaces. Before the introduction of hooks in React 16.8, state management was primarily handled in class 
components using the this.state approach. However, with the advent of hooks, functional components can now have their own state.

The main advantage of using useState is that it allows functional components to maintain their local state. This simplifies the process 
of managing and updating component-specific data without relying on class components and the this keyword. Additionally, useState 
integrates seamlessly with React's rendering cycle. This ensures that your component re-renders when the state changes, effectively 
keeping your UI in sync with the underlying data.

----------------------------------------------------------------------------------------------------------------------------------------

*/

function App() {

  // Initializing the 'number' state with an initial value of 0
  const [number, setNumber] = useState(0);

  // Function to decrement the 'number' state
  function decrement() {
    setNumber((prevNumber) => prevNumber - 1);
  }

  // Function to increment the 'number' state
  function increment() {
    setNumber((prevNumber) => prevNumber + 1);
  }

  return (
    <>
      {/* Button to decrement the number */}
      <button onClick={decrement}>-</button>
      
      {/* Displaying the current 'number' state */}
      <span>{number}</span>
      
      {/* Button to increment the number */}
      <button onClick={increment}>+</button>
    </>
  );
}

export default App;