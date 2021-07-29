import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Counter } from './Components/Counter';
import {Todos} from './Components/todos'

function App() {
  
  const [counter, setCounter] = useState(0)

  let countHandller = () => {
    setCounter(counter + 1)
  }
  let handller = () => {
    setCounter(counter - 1)
  }

  return (
    <div className="App">
      <Counter counter={counter }/>
      <button onClick={countHandller}>Add</button>
      <button onClick={handller}>Substract</button>

      <div>

      <Todos/>
      </div>
    </div>
  );
}

export default App;
