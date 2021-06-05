import React, { useState, useEffect } from 'react';
import { Table, Button, Container, Row, Col } from 'reactstrap';
import Navbar from './Navbar';
import CreateRecipe from "./CreateRecipe"
import ViewRecipe from './ViewRecipe';
import RecipeTable from './RecipeTable';
// import Authorization from 'Authorization';

const ViewAll = (props) => {
    const [recipes, setRecipes] = useState([]);
    const fetchRecipes = () => {
        fetch('http://localhost:3000/recipe/my-recipes', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then( (res) => res.json())
        .then((logData) => {
            setRecipes(logData)
            console.log(logData)
        })
    }
    useEffect(() => {
        // fetchRepices();
    }, [])

        return(
        <Container>
            <Row>
                <Col md='3'>
                    {/* <CreateRecipe fetchRecipes={fectchRecipes} token={props.token} /> */}
                </Col>
                <Col md='9'>
                    {/* <RecipeTable recipes={recipes} fectchRecipes={fetchRecipes} token={props.token}/> */}
                </Col>
                </Row>
        </Container>
        )}  


export default ViewAll;
