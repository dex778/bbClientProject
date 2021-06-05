import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import CreateRecipe from './CreateRecipe';
import RecipeTable from './RecipeTable';
import RecipeEdit from './RecipeEdit';

const [recipes, setRecipes] = useState([]);
const [updateActive, setUpdateActive] = useState(false); //used to conditionally display our RecipeEdit component. When RecipeIndex loads, updateActive will be false, so RecipeEdit will not display.  If a user decides to click the 'update' button within a row of our RecipeTable component, updateActive will be set to true, and our RecipeEdit component will display to the screen.
const [recipeToUpdate, setRecipeToUpdate] = useState([]); // recipeToUpdate will be used as a prop by RecipeEdit.js.  When the user clicks on a row of the RecipeTable.js, recipeToUpdate will be switched from an empty object to the recipe object displayed by the row the user clicked on.  RecipeEdit will use this recipe object to request updated recipe details to the appropriate recipe in our database.

const RecipeIndex = (props) => {
    const [recipes, setRecipes] = useState([]);
    const fetchRecipes = () => {
        fetch('http://localhost:3000/recipes', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then( (res) => res.json())
        .then((logRecipes) => {
            setRecipes(logRecipes)
        })
    }

    useEffect(() => {
        fetchRecipes();
    }, [])

 // should this return be a list? card? container?
    return(
        <Container>
            <Row>
                <Col md="3">
                    {/* create component goes here */}
                </Col>
                <Col md="9">
                    <h2>Create a recipe to see a table. This will be added in later....</h2>
                </Col>
            </Row>
        </Container>
    )
}

export default RecipeIndex;