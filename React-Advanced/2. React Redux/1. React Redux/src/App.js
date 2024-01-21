import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './action';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.logged);
  console.log(isLogged)

  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter: {counter}</h1>
      <h1>Is Logged: {isLogged ? 'Yes' : 'No'}</h1>
      <button onClick={() => dispatch(increment(5))}>Increment</button>
      <button onClick={() => dispatch(decrement(5))}>Decrement</button>
    </>
  );
}

export default App;
