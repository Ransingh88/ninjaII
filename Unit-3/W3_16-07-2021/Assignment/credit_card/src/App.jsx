import card from './pinkcredircard.jpg';
import './App.css';
import {Form} from './Components/Form'

function App() {
  return (
    <div className='creditCard'>
      <img src={card} alt="card" />
     <Form/>
    </div>
  );
}

export default App;
