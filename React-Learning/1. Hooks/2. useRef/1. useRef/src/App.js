import React, { useState, useEffect, useRef } from 'react';
import './App.css';

/*

The useRef()-Hook
----------------------------------------------------------------------------------------------------------------------------------------

useRef in React is a Hook that provides a way to create mutable object references that persist across renders without 
triggering a re-render of the component. It is commonly used for accessing and interacting with DOM elements, 
managing mutable values that do not affect rendering, or preserving values across renders. The useRef object has a .current 
property that can be assigned any value and retains its value across renders without causing the component to update. 
This makes it suitable for scenarios where you need to maintain state-like behavior without triggering component re-renders.

----------------------------------------------------------------------------------------------------------------------------------------

*/

function App() {
  const [name, setName] = useState("");
  const setCount = useRef(0);

  useEffect(() => {
    setCount.current = setCount.current + 1;
  });

  return (
    <>
      <input value={name} onChange={(e) => { setName(e.target.value) }} />
      <p>Hi, my name is {name}</p>
      <p>I rendered {setCount.current} times.</p>
    </>
  );
}

export default App;