import React from 'react';
import {  Form, Button } from 'reactstrap';
// import Login from '../LandingPage/Login'
import ViewRecipe from './ViewRecipe'
import ViewAll from './ViewAll';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


const RecipePage = () => {

    return (
        <div>
            <h1>This is the Recipe Landing/Create Page</h1>
            <Button to={ViewRecipe}>View Recipe</Button>
            <Button to={ViewAll}>View All</Button>
            <Router>

            {/* <Login /> */}
            <Switch>
            <Route exact path = '/ViewRecipe' component={ViewRecipe}/>
            <Route exact path = '/ViewAll' component={ViewAll}/>
             <Route exact path = '/ViewAll' component={ViewAll}/>
             </Switch>
             
            <Link to="/ViewAll" component={ViewAll}>

             
            </Link>
           
        
            </Router>
        </div>
        
    )
}

export default RecipePage;
