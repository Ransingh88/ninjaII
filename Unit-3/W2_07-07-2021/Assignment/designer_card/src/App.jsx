import './App.css';
import { Card } from './Components/Card'

let info =
{
  name: 'Ricky Park',
  location: 'NEWYORK',
  desc: 'User Interface and front-end Developer',
  skills:['UI/UX','HTML','CSS','FULL STACK WEB DEVELOPMENT','JAVASCRIPT','PYTHON','JAVA','NODE JS','REACT']
  }

function App() {
  return (
    <div >
      <Card info={ info}/>
    </div>
  );
}

export default App;
