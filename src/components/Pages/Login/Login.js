import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/UserContext/UserContext';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then((userCredential) => {
                // Signed in 
                toast.success('Successfully Logged in');
                const user = userCredential.user;
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error)
                const errorCode = error.code;
                const errorMessage = error.message;
            });


    }
    return (
        <Form className='w-50 mx-auto' onSubmit={handleSubmit}>

            {/* Email input */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='fw-bold fs-3'>Email</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter Your Email" />
            </Form.Group>

            {/* Password input */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='fw-bold fs-3'>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
                <Form.Text className="text-muted">
                    error
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Log In
            </Button>
        </Form>
    );
};

export default Login;