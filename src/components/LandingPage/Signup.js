import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from '../../helpers/environment'

const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passlength, setPasslength] = useState(null);

    requiredLength = 8

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(username, password);

        fetch(`${APIURL}/register`, {
            method: 'POST',
            body:JSON.stringify({
                    username: username, 
                    password: password
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
            console.log(data.sessionToken)
        })
    }

    useEffect(() => {
        setPasslength(password.length < requiredLength ? true : alert('Your password is too short'))
        // setValidLength(firstPassword.length >= requiredLength ? true : false)

    },[])

    return(
        <div>
            <h1>Sign up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" onChange={(e) => setPassword(e.target.value)} name="password" value={password}></Input>
                    <button type="submit" >Signup</button>
                </FormGroup>
            </Form>
        </div>
    )
}


export default Signup;