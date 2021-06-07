import {React, useState} from 'react';
import {  Form, FormGroup, Label, Input, Button } from 'reactstrap';
// import Login from '../LandingPage/Login'

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import e from 'cors';
//Rachel create frontend
const RecipePage = (props) => {
    // console.log(props)
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [preparation, setPreparation] = useState('');
    const [time, setTime] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/recipe/create', {
        method: 'POST',
        body: JSON.stringify({ 
            name: name, 
            ingredients: ingredients, 
            preparation: preparation, 
            time: time
        }),
        headers: new Headers ({
            'Content-Type' : 'application/json',
            'Authorization' : props.sessionToken,
            'Access-Control-Allow-Origin': '*'   
        }),
        
    })
    .then((response) => response.json())
    .then(data => {
        console.log(data)
        setName('');
        setPreparation('');
        setIngredients('');
        setTime('');
        props.fetchRecipes();
        })
    .catch((err) => {
        console.log(err, 'Recipe Not Created')
    })
    }
    
    return (
        <div>
            <h1>This is the Recipe Landing/Create Page</h1>
            <Form onSubmit={handleSubmit}>
            <FormGroup>
                 <Label for="recipetitle">Recipe Title</Label>
                 <Input name="name" value={name} onChange={(e) => setName(e.target.value)} />
             </FormGroup>
         
         <FormGroup>
             <Label for="ingredientlist">Ingredients</Label>
              <Input name="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
          </FormGroup>
         <FormGroup>
             <Label for="prep">Preparation Instructions</Label>
             <Input name="preparation" value={preparation} onChange={(e) => setPreparation(e.target.value)}/>
         </FormGroup>
         <FormGroup>
             <Label for="time">Preparation Time</Label>
            <Input name="time" value={time} onChange={(e) => setTime(e.target.value)} />
         
         <button type="submit">Save Recipe</button>
         </FormGroup>
         </Form>
           <Link to='/recipes'>View Recipes</Link>
            
            <div>
                <div>

                </div>
            </div>

        </div>
    );
}




export default RecipePage;




