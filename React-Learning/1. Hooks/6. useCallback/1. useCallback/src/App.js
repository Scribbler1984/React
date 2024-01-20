import {useState, useCallback} from 'react';
import List from './List';


/*

The useCallback()-Hook
----------------------------------------------------------------------------------------------------------------------------------------

useCallback is a hook that is used to optimize the performance of functional components by memoizing 
(caching) a callback function. It is particularly useful when you need to pass a function as a prop to 
child components or when you want to prevent unnecessary re-renders caused by functions being recreated 
on each render cycle.

The primary use case for useCallback is to avoid the recreation of callback functions, which can lead to 
unnecessary re-renders of child components. 

----------------------------------------------------------------------------------------------------------------------------------------

*/


export default function App() {
  
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2]
  },[number])

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333'
  }

  return (
    <div style={theme}>
    <input
      type="number"
      value={number}
      onChange={e=>setNumber(parseInt(e.target.value))}
    />
    <button onClick={()=>setDark(prevDark => !prevDark)}>Toggle Theme</button>
    <List getItems={getItems}></List>
    </div>
  );
}