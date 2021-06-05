import React from 'react';
import { Form, Button, FormGroup, Label, Input, FormText } from 'reactstrap';
import Login from '../LandingPage/Login'
import ViewRecipe from '../LandingPage/Login'



const RecipePage = (props) => {

    return (
        <div>
            <h1>This is the Recipe Landing/Create Page</h1>
            {/* <Login /> */}
            <Button to={ViewRecipe}>ViewRecipe</Button>
      
           </div>
        
    );
}

const CreateForm = (props) => {
    return (
      
        <Form>
            <FormGroup>
                <Label for="recipetitle">Recipe Title</Label>
                <Input type="textarea" name="recipetext" id="examplerecipe" />
            </FormGroup>
         
         <FormGroup>
             <Label for="ingredientlist">Ingredients</Label>
             <Input type="textarea" name="ingredientse" id="ingredientrecipe" />
         </FormGroup>
         <FormGroup>
             <Label for="prep">Preparation Instructions</Label>
             <Input type="textarea" name="pi" id="pie" />
         </FormGroup>
             <FormGroup>
             <Label for="owner">Recipe Owner</Label>
             <Input type="textarea" name="ro" id="roe" />
         </FormGroup>
         <FormGroup>
             <Label for="time">Preparation Time</Label>
             <Input type="textarea" name="pt" id="pty" />
         </FormGroup>
   
        </Form>

)};





fetch('http://localhost:3000/recipe/create', {
    method: 'POST',
    headers: new Headers ({
        'Content-Type' : 'application/json',
        'Authorization' : accessToken

    }),
    body: JSON.stringify(newEntry)
}) 
.then(response => {
    console.log(response.json())
    displayMine()
})
.catch((err) => {
    console.log(err, 'Recipe Not Created')
})


export default RecipePage;
