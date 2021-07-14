import './App.css';
import { CopyAddress } from './Components/CopyAddress'
import { faCopy, faQrcode } from '@fortawesome/free-solid-svg-icons'



function App() {
  return (
    <div>
      <CopyAddress title = 'Copy Address' icon = {faCopy}/>
      <CopyAddress title = 'QR Code' icon = {faQrcode}/>
    </div>
  );
}

export default App;
