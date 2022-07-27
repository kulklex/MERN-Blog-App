import React from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import Home from './pages/Home';
import SinglePost from './pages/SinglePost';



function App() {
  



  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <SinglePost/>
    </div>
  );
}

export default App;
