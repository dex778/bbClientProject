import React from 'react';
import { Table, Button } from 'reactstrap';
import ViewRecipe from './ViewRecipe';


const RecipeTable = (props) => {
    const deleteRecipe = (recipe) => {
        fetch(`http://localhost:3000/Recipes/${recipe.id}`, { //is link correct? 
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchRecipes())
    }

    //check button links below

    const ViewAll = () => {
        return props.recipes.map((recipes, index) => {
            return(
                <tr key={index}>
                    <th scope='row'>{recipe.id}</th>
                    <td>{recipe.result}</td> 
                    <td>{recipe.name}</td>
                    <td>{recipe.created}</td>
                    <td>
                        <Button color='primary' onClick={() => {ViewRecipe(recipe)}}>View</Button>
                        <Button color='warning' onClick={() => {editRecipe(recipe); props.UpdateOn()}}>Edit</Button>
                        <Button color='danger' onClick={() => {deleteRecipe(recipe)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }
    return(
       <div>
        <h3>My Recipe Book</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Date Created</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </Table>
        </div>
    )
}

export default RecipeTable;