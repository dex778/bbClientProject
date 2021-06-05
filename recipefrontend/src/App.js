import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Home from './components/LandingPage/Home';
import Navigation from '../src/components/Navbar/Navigation';
import Authorization from '../src/components/LandingPage/Authorization';

import Header from './components/LandingPage/Header'
import Footer from './components/LandingPage/Footer'
import Background from './components/LandingPage/Background'


import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CreateRecipe from './components/Recipes/CreateRecipe';
import ViewRecipe from './components/Recipes/ViewRecipe';
import RecipePage from './components/Recipes/RecipePage';
import ViewAll from "./components/Recipes/ViewAll";


function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'))
    }
  },[])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken)
    setSessionToken(newToken);
    console.log(sessionToken);

  }

  const protectedViews = () => {
    

    return (sessionToken === localStorage.getItem('token') ? <RecipePage token={sessionToken}/> : 
    <Authorization updateToken={updateToken}/>)
  }

  return (
    <div className="page-container">
      <div className="content-wrap">

      <Background />
      <Navigation />
      {/* <Navigation /> */}
      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/createrecipe" component={CreateRecipe}/>
        <Route exact path="/viewrecipe" component={ViewRecipe}/>
        {/* <Route exact path="/recipepage" component={RecipePage}/> */}
        <Route exact path='/viewall' component={ViewAll}/>
      </Router>
      {/* <RecipePage /> */}
      {protectedViews()}
      {/* {localStorage.getItem('token') !== null ? <RecipePage href="/recipepage" /> : null} */}
      {/* <RecipePage /> */}
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
