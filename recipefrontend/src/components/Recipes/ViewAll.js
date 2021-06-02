import React from 'react';
import { Table, Button } from 'reactstrap';
import Navbar from './Navbar';
import ViewRecipe from './ViewRecipe';
import RecipeTable from './RecipeTable';
// import Authorization from 'Authorization';



const ViewAll  = (props) => {
    return(
        <Container>
            <Row>
                <Col md='3'>
                    <CreateRecipe fetchRecipes={fectchRecipes} token={props.token} />
                </Col>
                <Col md='9'>
                    <RecipeTable recipes={recipes} fectchRecipes={fetchRecipes} token={props.token}/>
                </Col>
                </Row>
        </Container>
    )
}

export default ViewAll;