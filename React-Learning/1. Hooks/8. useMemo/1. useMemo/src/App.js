import { useState, useMemo } from "react";

/*

The useMemo()-Hook
----------------------------------------------------------------------------------------------------------------------------------------

The useMemo hook in React is used to optimize performance by memoizing the result of an expensive computation. Here's a concise explanation based on your example:

Context
In your App component, you have two states: number (an input value) and dark (a theme toggle).

Problem
Without useMemo, every re-render (e.g., when toggling the theme) would re-run the expensive slowFunction, even if number hasn't changed, causing performance issues.

Solution with useMemo
You use useMemo to memoize the result of slowFunction(number):

javascript
Code kopieren
const doubleNumber = useMemo(() => slowFunction(number), [number]);
Memoization: slowFunction only re-runs if number changes.
Dependencies: [number] ensures that useMemo recalculates doubleNumber only when number updates.
Benefits
Performance Optimization: Prevents unnecessary re-computation of slowFunction.
Efficiency: Only recalculates when number changes, reducing workload on re-renders.
Summary
State: Manages number and dark.
Memoization: Efficiently computes doubleNumber using useMemo.
Rendering: Displays doubleNumber and toggles theme based on dark.
By using useMemo, you ensure the component runs efficiently by avoiding redundant calculations of doubleNumber.

----------------------------------------------------------------------------------------------------------------------------------------

*/

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  },[number]);
  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) =>
          setNumber(e.target.value ? parseInt(e.target.value) : 0)
        }
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>
      <div style={themeStyle}>{doubleNumber}</div>
    </>
  );
}

function slowFunction(num) {
  console.log("Calling Slow Function");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}

export default App;