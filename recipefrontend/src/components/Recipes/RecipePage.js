import React from 'react';
import { Form, Button } from 'reactstrap';
import Login from '../LandingPage/Login'
import ViewRecipe from '../LandingPage/Login'



const RecipePage = () => {

    return (
        <div>
            <h1>This is the Recipe Landing/Create Page</h1>
            {/* <Login /> */}
            <Button to={ViewRecipe}>ViewRecipe</Button>
        </div>
        
    )
}

export default RecipePage;
