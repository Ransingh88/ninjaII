import './App.css';
import {useRef} from 'react'

function App() {
const constRef = useRef()
  const handleFocus = ()=>{
    
    constRef.current.focus();
  }
  return (
    <div className="App">
      <h1>Focus to Inputbox</h1>
      <input type='text' ref={constRef} placeholder='enter'/>
      <button onClick={handleFocus}>Click to Focus</button>
    </div>
  );
}

export default App;
