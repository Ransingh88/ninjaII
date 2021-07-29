import './App.css';
import {Navbar} from './Components/Navbar'
import {Menu} from './Components/Menu'


function App() {
  return (
    <div>
      <Navbar>
        <div><h2>Site Name</h2></div>
        <div>
          <Menu title='About us'/>
          <Menu title='Prices'/>
          <Menu title='Start page'/>
          <Menu title='Offer'/>
          <Menu title='Contact'/>
        </div>
        </Navbar>
    </div>
  );
}

export default App;
