import './App.css';
import useLocalStorage from './useLocalStorage';

/*

The useLocalStorage() Custom Hook
----------------------------------------------------------------------------------------------------------------------------------------

useLocalStorage is a custom hook in React, designed to manage state with localStorage. This hook is created to provide functionality 
similar to useState, but with the added benefit of persisting state data in the browser's localStorage.

The key steps involved in this custom hook:

1. Initialization: It takes two parameters - key (for localStorage) and initialValue (default value if no localStorage value is found).

2. LocalStorage Check: Checks if there is a value stored in localStorage under the specified key. If found, uses it as the initial value; 
   otherwise, uses the provided initialValue.

3. State Management: Utilizes the useState hook to create a state variable (value) and a corresponding setter function (setValue) with 
   the initial or localStorage value.

4. Update Function: Defines an updateValue function that takes a new value, updates the state using setValue, and stores the new value 
   in localStorage using localStorage.setItem.

5. Return: Returns an array containing the current state value (value) and the update function (updateValue).

Usage in App Component:

In the App component, useLocalStorage is employed to manage the state of the name input field. The current value is retrieved from 
localStorage or set to an empty string initially. The updateValue function is used as the onChange handler for the input field to 
update both the state and localStorage whenever the input changes, mirroring the behavior of the useState hook.

----------------------------------------------------------------------------------------------------------------------------------------

*/

function App() {

  const [name, setName] = useLocalStorage('name', '')

  return (
    <>
      <input 
      type="text"
      value={name}
      onChange = {e => setName(e.target.value)}>
      </input>
    </>
  );
}

export default App;




