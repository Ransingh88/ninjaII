import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  const [counter, setCounter] = useState(0)

  return (
    <div className="App">
      <h1>Counter is : {counter}</h1>
      <button onClick={() => {
        setCounter(counter + 1)
      }}>Add</button>
      <button onClick={() => {
        setCounter(counter - 1)
      }}>Substract</button>
    </div>
  );
}

export default App;
