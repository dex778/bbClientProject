import React from 'react';
import { Table, Button } from 'reactstrap';
import APIURL from '../../helpers/environment'


const RecipeTable = (props) => {
    console.log(props.token)
    const deleteRecipe = (recipe) => {
        fetch(`${APIURL}/recipe/delete/${recipe.id}`, { //is link correct? 
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchRecipes())
    }
   
    //check button links below


    const viewRecipes = () => {
        // console.log('Code', props.recipes)
        if(props.recipe !== undefined) {
            return props.recipe.map((recipe, index) => {
                return(
                    <tr key={index}>
                        <th scope='row'>{recipe.id}</th>
                        { <td>{recipe.name}</td>  }
                        <td>{recipe.preparation}</td>
                        <td>{recipe.ingredients}</td>
                        <td>{recipe.time}</td>
    
                        <td>
                            {<Button color='warning' onClick={() => {props.editUpdateRecipe(recipe) ; props.updateOn()}}>Edit</Button> }
                            <Button color='danger' onClick={() => {deleteRecipe(recipe)}}>Delete</Button>
                        </td>
                    </tr>
                )
            })
        }
        
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
                    <th>Preparation</th>
                    <th>Ingredients</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
            {viewRecipes()}
            </tbody>
        </Table>
        <Link to='/recipepage'>Create Recipe</Link>
        </div>
    )
}

export default RecipeTable;
