import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Home from './components/LandingPage/Home';
import Navigation from '../src/components/Navbar/Navigation';
import Authorization from '../src/components/LandingPage/Authorization';

import Header from './components/LandingPage/Header'
import Footer from './components/LandingPage/Footer'


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
    <div className="App">
      <Header />
      {/* <Navigation /> */}
      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/createrecipe" component={CreateRecipe}/>
        <Route exact path="/viewrecipe" component={ViewRecipe}/>
        <Route exact path="/recipepage" component={RecipePage}/>
        <Route exact path='/viewall' component={ViewAll}/>
      </Router>
      {/* <Authorization updateToken={updateToken}/> */}
      {protectedViews()}
      {/* {localStorage.getItem('token') !== null ? <RecipePage href="/recipepage" /> : null} */}
      {/* <RecipePage /> */}
      <Footer />

    </div>
  );
}

export default App;
