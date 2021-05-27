import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import Login from 'react'
import CreateRecipe from '../Recipes/CreateRecipe'
import ViewRecipe from '../Recipes/ViewRecipe';

const Home = () => {
    return ( 
        <div>
            <Link to='/createrecipe'>Create Recipe</Link>
           <div>
               
           </div>
           
           <div>
               <Switch>
                   <Route exact path='/createrecipe'><CreateRecipe /></Route>
                   <Route exact path='/viewrecipe'><ViewRecipe /></Route>

               </Switch>
           </div>

            
        </div>
     );
}
 
export default Home;