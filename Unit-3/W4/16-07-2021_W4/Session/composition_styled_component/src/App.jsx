
import './App.css';
import { From } from './Components/Form'
import styled from 'styled-components'
import { useState } from 'react';

function App() {

  const Wrapper = styled.div`
    color: ${(props)=>(props.theme === 'light' ? '#000' : '#fff')};
    border: 1px solid royalblue;
    border-radius: 6px;
    padding: 20px;
    margin-top: 20px;
    width: 60%;
    margin: auto;
    background-color: ${(props)=>(props.theme === 'light' ? '#fff' : '#000')};

    &:hover{
      color: coral;
      cursor: pointer;
      background-color: #eee;
    }
  
  `
const [theme,setTheme] = useState('light')
  return (
    <div className="App">
      <h1>Composition</h1>
      <From>
        <h2>Resister</h2>
        <input type="text" name="" id="" placeholder='enter first Name'/> <br /> 
        <input type="text" name="" id="" placeholder='enter Last Name'/><br />
        <input type="text" name="" id="" placeholder='enter Email'/><br />
        <input type="text" name="" id="" placeholder='enter Password' /><br />
        <button>Sign up</button>
      </From>

      <From>
        <h2>Login</h2>
        <input type="text" name="" id="" placeholder='enter Email'/><br />
        <input type="text" name="" id="" placeholder='enter Password' /><br />
        <button>Sign In</button>
      </From>

      <Wrapper bg='yellow' theme={theme}>
        <h1>Styled Components</h1>
      </Wrapper>
      <button onClick={() => {
        setTheme((prev)=>(prev === 'light' ? 'dark' : 'light'))
      }}>Change Theme to 
        {theme === 'light' ? ' dark' : ' light'}
      </button>
    </div>
  );
}

export default App;
