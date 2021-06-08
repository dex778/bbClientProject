import React, { useState} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import APIURL from '../../helpers/environment'

const Login = (props) => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/login`, {
            method: 'POST',
            body:JSON.stringify({
                    username: username,
                    password: password
                }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
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
                <Button  type="submit" >Login</Button>
            </Form>
           
        

        </div>
            
        </div>
     );
}
 
export default Login;