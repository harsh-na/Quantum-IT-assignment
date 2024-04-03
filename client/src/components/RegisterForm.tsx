// src/components/RegisterForm.tsx
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/registerForm.css"

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3001/register', { name, dob, email, password });
      navigate('/');
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="d-flex flex-column p-5 h-100">
      <h1 className="sign mx-auto bg-info d-flex flex-column p-2 bd-highlight h-25 w-25 align-items-center">Registration</h1>
      <Form className="bg-info mx-auto d-flex flex-column p-2 bd-highlight h-100 w-50">
      <Form.Group className="mx-auto d-flex bd-highlight h-25 w-50  align-items-center" controlId="formBasicName">
        <Form.Label className='me-2'>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mx-auto d-flex p-2 bd-highlight h-25 w-50 align-items-center" controlId="formBasicDOB">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
      </Form.Group>

      <Form.Group className="mx-auto d-flex p-2 bd-highlight h-25 w-50  align-items-center" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mx-auto d-flex p-2 bd-highlight h-25 w-50  align-items-center" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>

      <Button variant="primary" className="mx-auto d-flex p-2" type="button" onClick={handleRegister}>
        Register
      </Button>
    </Form>
    </div>
    
  );
};

export default RegisterForm;
