import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'

import ViewRecipe from './ViewRecipe'

const CreateRecipe = () => {
    return ( 
        <div>
            <h1>Create Recipe page</h1>
            <div>
               <Link to='/viewrecipe'>View Recipe</Link>
           </div>
           
           <div>
               <Switch>
                   <Route exact path='/viewrecipe'><ViewRecipe /></Route>
               </Switch>
           </div>
        </div>
     );
}
 
export default CreateRecipe;