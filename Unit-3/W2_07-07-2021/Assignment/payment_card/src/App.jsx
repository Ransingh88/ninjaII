import './App.css';
import { CaseStudyBtn } from './Components/CaseStudyBtn'
import { Heading } from './Components/heading'
import a from './a.svg';

function App() {
  return (
    <div className='main'>
      <p className='date'>28/02/2021</p>
      <img className='logo' src="https://pngimg.com/uploads/amazon/small/amazon_PNG27.png" alt="" />
      <CaseStudyBtn />
      <Heading head='Amazone Gift'/>
      <Heading head='Pay'/>
      <img className='arrow' src={a} alt="" />
      <p className='txt'>Desktop - Mobile</p>
    </div>
  );
}

export default App;
