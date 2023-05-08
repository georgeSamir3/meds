import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import "./css/Login.css"


const Login = () => {
	return(
		<div className='Login-container'>
		    <Form>
		    <h1>Login Form</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    {/*  <Button className='btn btn-dark' variant="primary" type="submit">
        Submit
      </Button>*/}
      <Link className="btn btn-dark" to={'/'}>Submit</Link>
    </Form>
		</div>
		);
};

export default Login;