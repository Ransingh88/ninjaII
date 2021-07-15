import './App.css';
import {Navbar} from './Components/Navbar'
import {Card} from './Components/Card'
import {Profile} from './Components/Profile'



function App() {
  return (
    <div className='app'>
      
      
      
      
    <div className='top'><Navbar />
      <Profile/></div>
    <div className='bottom'><Card title='Bitcoin($btc)' tok = '3CXhgwehwgegVC53CFrcyfyyZy5' img='https://upload.wikimedia.org/wikipedia/commons/9/9a/BTC_Logo.svg'/>
      <Card title='Ripple($xrp)' tok = '3CXhgwehwgegVC53CFrcyfyyZy5' img='https://i.pinimg.com/originals/e6/9d/92/e69d92c8f36c37c84ecf8104e1fc386d.png'/>
      <Card title='Dogecoin($doge)' tok = '3CXhgwehwgegVC53CFrcyfyyZy5' img='https://cdn.worldvectorlogo.com/logos/dogecoin.svg'/></div>
    </div>
  );
}

export default App;
