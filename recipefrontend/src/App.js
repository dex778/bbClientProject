import React { useState, useEffect } from 'react'; //BK
import Home from './LandingPage/Home'
import './App.css';
import SiteBar from './components/Recipes/Navbar'; //BK
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
        <SiteBar/> 
      </Router>
    </div>
  );
}

export default App;
