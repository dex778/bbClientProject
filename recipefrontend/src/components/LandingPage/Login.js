import {React, useState} from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import ViewRecipe from '../Recipes/ViewRecipe';
import CreateRecipe from '../Recipes/CreateRecipe';
import RecipePage from '../Recipes/RecipePage'


const Login = (props) => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/login", {
            method: 'POST',
            body:JSON.stringify({
                    username: username,
                    password: password
                }),
            headers: new Headers({
                'Content-Type': 'application/json',
                // 'Authorizaton': 'props.updateToken'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data)
            props.updateToken(data.sessionToken)
        })
        console.log(username, password);

    }

    // const NewPage = () => {

    //     return (
    //         <Link to={CreateRecipe}></Link>
    //     )
        

    // }

    const protectedViews = () => {
    

        return (localStorage.getItem('token') !== null ? <RecipePage /> : null)
      }

    return ( 
       <div>
           <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit} >
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUserName(e.target.value)} name="username" value={username}></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}></Input>
                </FormGroup>
                <Button  type="submit" onClick={protectedViews}>Login</Button>
            </Form>
           
        

        </div>
            
        </div>
     );
}
 
export default Login;