import './App.css';
import {JoinUs} from './Components/JoinUs'
import {Setting} from './Components/Setting'
import {Login} from './Components/Login'
import {ContactUs} from './Components/ContactUs'
import {Search} from './Components/Search'
import {Help} from './Components/Help'
import {Home} from './Components/Home'
import { Download } from './Components/Download'
import {Buttons} from './Components/Buttons'

function App() {
  return (
    <div>
      <div>
        <JoinUs/>
        <Setting/>
      </div>
      <div>
        <Login/>
        <ContactUs/>
      </div>
      <div>
        <Search/>
        <Help/>
      </div>
      <div>
        <Home/>
        <Download/>
      </div>

      <div>
        <Buttons name='JOINUS' bgclr = 'royalblue' />
        <Buttons name='SETTING' bgclr = 'gray' />
      </div>
      <div>
        <Buttons name='LOGIN' bgclr = 'yellow' />
        <Buttons name='CONTACT US' bgclr = 'maroon' />
      </div>
      <div>
        <Buttons name='SEARCH' bgclr = 'yellowgreen' />
        <Buttons name='HELP' bgclr = 'purple' />
      </div>
      <div>
        <Buttons name='HOME' bgclr = 'hotpink' />
        <Buttons name='DOWNLOAD' bgclr = 'brown' />
      </div>
      
    </div>
  );
}

export default App;
