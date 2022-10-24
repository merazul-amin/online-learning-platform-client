import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/UserContext/UserContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const userName = form.name.value;
        const photUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(userName, photUrl, email, password);

        createUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error)
                const errorCode = error.code;
                const errorMessage = error.message;

            });
    }
    return (
        <Form className='w-50 mx-auto' onSubmit={handleSubmit}>

            {/* Name input */}
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className='fw-bold fs-3'>Full Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter full Name" />
            </Form.Group>

            {/* Photo url Input */}
            <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Label className='fw-bold fs-3'>Your Photo Url</Form.Label>
                <Form.Control name='photo' type="text" placeholder="Enter photo url" />
            </Form.Group>

            {/* Email input */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='fw-bold fs-3'>Email</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter Your Email" />
            </Form.Group>

            {/* Password input */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='fw-bold fs-3'>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Register;