import React from 'react';
import Search from './components/Search';
import './App.css'
import './index.css'
import backgroundImage from './images/finalimage.jpg'
function App() {
  return (
    <div className="App">
      <div
        className="image"
        style={{
          height: "400px", // Set height to 100 viewport height
          width: "100%", 
          backgroundImage: `url(${backgroundImage})`, // Use template literals
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          
        }}
      />
      
      <h1>Search from Database</h1>
      <Search />
    </div>
  );
}

export default App;
