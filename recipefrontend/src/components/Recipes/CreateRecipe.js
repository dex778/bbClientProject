// import React from 'react';
// import { Link, Route, Switch } from 'react-router-dom'
// import {Form, FormGroup, Label, Input} from 'reactstrap';

// import ViewRecipe from './ViewRecipe'

// const CreateRecipe = (props) => {

//     fetch('http://localhost:3000/recipe/create', {
//     method: 'POST',
//     headers: new Headers ({
//         'Content-Type' : 'application/json',
//         'Authorization' : props.token

//     }),
//     body: JSON.stringify(newEntry)
//     }) 
//     .then(response => {
//         console.log(response.json())
//         displayMine()
//     })
//     .catch((err) => {
//         console.log(err, 'Recipe Not Created')
//     })

//     return (
        
//         <Form>
//             <FormGroup>
//                 <Label for="recipetitle">Recipe Title</Label>
//                 <Input type="textarea" name="recipetext" id="examplerecipe" />
//             </FormGroup>
         
//          <FormGroup>
//              <Label for="ingredientlist">Ingredients</Label>
//              <Input type="textarea" name="ingredientse" id="ingredientrecipe" />
//          </FormGroup>
//          <FormGroup>
//              <Label for="prep">Preparation Instructions</Label>
//              <Input type="textarea" name="pi" id="pie" />
//          </FormGroup>
//              <FormGroup>
//              <Label for="owner">Recipe Owner</Label>
//              <Input type="textarea" name="ro" id="roe" />
//          </FormGroup>
//          <FormGroup>
//              <Label for="time">Preparation Time</Label>
//              <Input type="textarea" name="pt" id="pty" />
//          </FormGroup>
   
//         </Form>

// )};




 
// export default CreateRecipe;