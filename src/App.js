import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, BrowserRouter}
from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';


function App() {
  return (
    
    <div className="app">

      <Router>
        <Header/>
      <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path="/checkout" element={ <Checkout/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
      </Router>
     z
      
   
      
    </div>
  
  );
}

export default App;
