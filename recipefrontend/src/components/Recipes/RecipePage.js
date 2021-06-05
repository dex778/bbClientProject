import {React, useState} from 'react';
import {  Form, FormGroup, Label, Input, Button } from 'reactstrap';
// import Login from '../LandingPage/Login'
import ViewRecipe from './ViewRecipe'
import ViewAll from './ViewAll';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import e from 'cors';

const RecipePage = (props) => {

    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [preparation, setPreparation] = useState('');
    const [time, setTime] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/recipe/create', {
        method: 'POST',
        headers: new Headers ({
            'Content-Type' : 'application/json',
            'Authorization' : props.token
        }),
        body: JSON.stringify({recipe: 
            {name: name, ingredients: ingredients, preparation: preparation, time: time}})
    })
    .then(response => response.json())
    
    .then((logData) => {
        console.log(logData)
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
         </FormGroup>
         <button type="submit">Create Recipe</button>
            
         </Form>
            {/* <Button to={ViewAll}>View All</Button> */}
            {/* <Router>
            <Switch>
            <Route exact path = '/ViewRecipe' component={ViewRecipe}/>
            <Route exact path = '/ViewAll' component={ViewAll}/>
             </Switch>
            <Link to="/ViewAll" component={ViewAll}>
            </Link>
            </Router> */}
        </div>
    );
}




export default RecipePage;

//     return (
//         <div>
//             <h1>This is the Recipe Landing/Create Page</h1>
//             <Button to={ViewRecipe}>View Recipe</Button>
//             <Button to={ViewAll}>View All</Button>
//             <Router>

//             {/* <Login /> */}
//             <Switch>
//             <Route exact path = '/ViewRecipe' component={ViewRecipe}/>
//             <Route exact path = '/ViewAll' component={ViewAll}/>
//              <Route exact path = '/ViewAll' component={ViewAll}/>
//              </Switch>
             
//             <Link to="/ViewAll" component={ViewAll}>

             
//             </Link>
           
        
//             </Router>
//         </div>
        
//     );
// }


