import logo from './logo.svg';
import styles from './App.modules.css';
import { Counter } from './Components/Counter';

function App() {

  const arr = [1,2,3,4,5]
  return (
    <div className="App">
      {arr.map((el) => {
        return <Counter passedCounter={el}/>
      })}

    </div>
  );
}

export default App;
