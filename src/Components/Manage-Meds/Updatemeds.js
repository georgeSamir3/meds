import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Addmeds.css";


const Updatemeds = () => {
	return (
			<div className='Login-container'>
				<Form>
		    <h1>Update medicine</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Medicine name" />
      </Form.Group>

      <Form.Group className="mb-3">
      <textarea className='Form-control w-100' rows={5} placeholder='DESCRIPTION'></textarea>
      </Form.Group>
      <Form.Group className="mb-3">
      	<input type='file' className='forms-control'/>
      </Form.Group>
      <Button className='btn btn-dark' variant="primary" type="submit">
        Update
      </Button>
    </Form>
			</div>
		)
}
export default Updatemeds;