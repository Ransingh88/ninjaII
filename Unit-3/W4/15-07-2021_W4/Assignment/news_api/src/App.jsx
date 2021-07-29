import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { ApiKey } from './Components/ApiKey'
import { Item } from './Components/Item'
let a = 'apikey' //add your api key here

function App() {

  const [query, setQuery] = useState();
  const [data, setData] = useState([]);
  const [apiKey, setApiKey] = useState(a);
  const [page, setPage] = useState(1);
  
  


  const handleSearch = () => {

    
    
    axios.get('https://newsapi.org/v2/everything',{
      params:{
      q: {query},
      apiKey:apiKey,
        pageSize: 3,
      page:page
      }
    }).then((res) => {
      console.log(res.data.articles)

      setData(res.data.articles)

     
    })
  }

  const handlePageA = () => {
     if (page === 100) {
      setPage(100)
     }
    setPage(page + 1)
    handleSearch()
   }
  
  const handlePageS = () => {
    
    setPage(page -1)
    
    if (page === 1) {
      setPage(1)
    }
    handleSearch()
}
 

  return (
    <div>

      <div  className="App">
      <h1>News API</h1>
      <input type="text" placeholder='Search' onChange={(e) => setQuery(e.target.value)} value={query}/>
      <button onClick={handleSearch}>Search</button><br/>
      <button onClick={handlePageS}>Previous page</button>
        <button onClick={handlePageA}>Next page</button>
      </div>
      
      <div className='container'>
        
        {
          data.map((ele) => (
            <Item title={ ele.title}/>
          ))
        }
      </div>

      
    </div>
  );
}

export default App;
