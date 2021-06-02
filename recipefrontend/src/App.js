import React from 'react';
import Home from './components/LandingPage/Home'
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
