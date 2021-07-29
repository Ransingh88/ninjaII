import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios'

function App() {

  const [search, setSearch] = useState('')
  const [name, setName] = useState([])
  

  const handleSearch = (e) => {

    setSearch(e.target.value)

  }
  
  const handleClick = () =>
  {


    axios.get(`https://api.github.com/search/users?q=${search}`)
      .then((res) => {
        console.log(res.data.items)
        setName(res.data.items)
    })

  }
  

  return (
    <div className="App">
      <h1>Github</h1>
      
      <input type="text" onChange={handleSearch} value={search } placeholder='Search'/>
      <button onClick={handleClick}>Search</button>
      
      <div>
        {name.map((ele) => (
          <h5 key={ele.id}>{ele.login}</h5>
        ))}
      </div>
    </div>
  );
}

export default App;
