import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';

import RecipeTable from './RecipeTable';
import RecipeEdit from './RecipeEdit';
// import RecipePage from './RecipePage'


const RecipeIndex = (props) => {
    console.log(props.sessionToken)

    const [recipes, setRecipes] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [recipeToUpdate, setRecipeToUpdate] = useState([]);

    const fetchRecipes = () => {
        fetch('http://localhost:3000/recipe/my-recipes', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }) .then( (res) => res.json())
        .then((logRecipes) => {
            setRecipes(logRecipes)
            console.log(logRecipes)
        })
    }

    const editUpdateRecipe = (recipe) => {
        setRecipeToUpdate(recipe);
        console.log(recipe)
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    useEffect(() => {
        fetchRecipes();
    }, [])

 // should this return be a list? card? container?
    return(
        <Container>
            <Row>
                <Col md="3">
                </Col>
                <Col md="9">
                {<RecipeTable recipe={recipes} editUpdateRecipe={editUpdateRecipe} updateOn={updateOn} fetchRecipes={fetchRecipes} token={props.sessionToken}/> }
                </Col>
                {updateActive ? <RecipeEdit recipeToUpdate={recipeToUpdate} updateOff={updateOff} token={props.sessionToken} fetchRecipes={fetchRecipes}/> : <></>}
            </Row>
        </Container>
    )
}

export default RecipeIndex;

 //used to conditionally display our RecipeEdit component. When RecipeIndex loads, updateActive will be false, so RecipeEdit will not display.  If a user decides to click the 'update' button within a row of our RecipeTable component, updateActive will be set to true, and our RecipeEdit component will display to the screen.
// const [recipeToUpdate, setRecipeToUpdate] = useState([]); // recipeToUpdate will be used as a prop by RecipeEdit.js.  When the user clicks on a row of the RecipeTable.js, recipeToUpdate will be switched from an empty object to the recipe object displayed by the row the user clicked on.  RecipeEdit will use this recipe object to request updated recipe details to the appropriate recipe in our database.
