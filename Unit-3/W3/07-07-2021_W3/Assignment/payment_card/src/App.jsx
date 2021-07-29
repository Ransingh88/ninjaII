import './App.css';

import {Giftcard}  from './Components/Giftcard'

function App() {
  return ( <div>
      <Giftcard date='28/02/2020' gift='Amazon Gift' os='Desktop' bgclr='orange' pay='Pay' ims="https://pngimg.com/uploads/amazon/small/amazon_PNG27.png"/>
      <Giftcard date='17 Sep 2020' gift='Apple Gift' os='MacOs' bgclr='#eee' pay='Payment' ims="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png"/>
      <Giftcard date='01 Sep 2021' gift='Google Gift' os='Desktop' bgclr='royalblue' pay='Pay' ims="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"/>
    </div>
  );
}

export default App;
