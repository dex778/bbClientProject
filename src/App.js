import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './components/LandingPage/Home';
import Navigation from '../src/components/Navbar/Navigation';
import Authorization from '../src/components/LandingPage/Authorization';
import RecipePage from './components/Recipes/RecipePage';
import RecipeTable from './components/Recipes/RecipeTable';
import RecipeIndex from './components/Recipes/RecipeIndex';
import Footer from './components/LandingPage/Footer'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {
  const [sessionToken, setSessionToken] = useState('');
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'))
    }
  }, [])
  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken)
    setSessionToken(newToken);
    console.log(sessionToken);
  }
  const Logout = () => {
    localStorage.clear();
    setSessionToken('')
  }
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Navigation logout={Logout}/>
        <Router>
          {sessionToken === localStorage.getItem('token') ? (
            <>
              <Route exact path="/" component={Home} />
            {<Route exact path='/recipepage' render={(props) => (<RecipePage {...props} sessionToken={sessionToken} />
              )}/>}
              
              {<Route exact path='/recipes' render={(props) => (<RecipeIndex {...props} sessionToken={sessionToken} />
              )}/>}
              

              <Route exact path='/recipeTable' component={RecipeTable} />
            </>
          ) : <Authorization updateToken={updateToken} />}
        </Router>
      </div>
      <Footer />
    </div>
  );
}
export default App;