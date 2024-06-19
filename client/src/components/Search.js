import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/search?q=${query}`);
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <input
        style={{width:"400px" ,height:"30px",borderRadius:"4px"}}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <br></br>
      
      <button  style={{color:"white" ,background:"#00b4d8", borderRadius: "3px", width:"90px",height:"40px"}}onClick={handleSearch} >Search</button>
      <ul>
        {results.map((item) => (
          <li key={item._id}>{item.name}: {item.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
