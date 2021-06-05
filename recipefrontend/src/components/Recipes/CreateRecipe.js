import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'


import ViewRecipe from './ViewRecipe'

const CreateRecipe = () => {
    return ( 
        <div>
            <h1>Create Recipe page</h1>
            <div>
               <Link to='/viewrecipe'>View Recipe</Link>
               <Link to='/viewall'>View All Recipes</Link>
           </div>
           
           <div>
               
           </div>
        </div>
     );
}
 
export default CreateRecipe;