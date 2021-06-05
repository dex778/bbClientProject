import React from 'react';
import {  Form, FormGroup, Label, Input, Button } from 'reactstrap';
// import Login from '../LandingPage/Login'
import ViewRecipe from './ViewRecipe'
import ViewAll from './ViewAll';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


const RecipePage = (props) => {

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
        
    );
}

const CreateForm = (props) => {
    fetch('http://localhost:3000/recipe/create', {
    method: 'POST',
    headers: new Headers ({
        'Content-Type' : 'application/json',
        'Authorization' : props.token
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








export default RecipePage;
