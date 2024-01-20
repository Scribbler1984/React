import './App.css';
import {useReducer} from 'react';


/*

The useReducer()-Hook
----------------------------------------------------------------------------------------------------------------------------------------

The useReducer hook in React is a state management hook that provides an alternative to the useState hook. 
It's particularly useful when dealing with complex state logic.

Instead of directly updating the state based on its previous value, as is done with useState, useReducer 
uses a reducer function to determine state changes. The reducer function takes two arguments - the current 
state and an action - and returns the new state.

Here's a breakdown of how it works:

Initialization: You initialize useReducer with a reducer function and an initial state. The initial state 
serves the same purpose as the initial state in useState.

Dispatching Actions: To update the state, you use the dispatch function returned by useReducer. The 
dispatch function takes an action object as an argument.

Reducer Function: The action object is then processed by the reducer function. The reducer 
function specifies how the state should change based on the action type. It returns the new state.

State Update: The state is updated according to the rules defined in the reducer function.

By centralizing state transition logic in a reducer function, useReducer can make the code more 
readable and maintainable, especially when dealing with more intricate state management scenarios. 
It's often preferred when the state logic becomes complex or involves multiple related pieces of state.

----------------------------------------------------------------------------------------------------------------------------------------

*/


function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function App() {
  const[state, dispatch] = useReducer(reducer, {count:0});

  function increment(){
    dispatch({type: 'increment'})
  }

  function decrement(){
    dispatch({type: 'decrement'})
  }

  return (
    <>
      <button onClick={decrement}>Decrement</button>
      <br></br>
      <span>{state.count}</span>
      <br></br>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default App;
