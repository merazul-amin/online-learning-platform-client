import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/UserContext/UserContext';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../../../firebase/firebase.init';

const auth = getAuth(app);
const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();


const Login = () => {
    const [uiError, setUiError] = useState('');

    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // log in with email and password
        logIn(email, password)
            .then((userCredential) => {
                // Signed in 
                toast.success('Successfully Logged in');
                const user = userCredential.user;
                console.log(user)
                setUiError('');
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error)
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                setUiError(errorMessage);
            });
    }

    // log in with github

    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                console.log(user);
                setUiError('');
                navigate(from, { replace: true });
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                setUiError(errorMessage);
            });
    }
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                setUiError(errorMessage);
            });
    }
    return (
        <div className='w-50 mx-auto'>
            <Form className='w-75 mx-auto' onSubmit={handleSubmit}>

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
                        <span className='text-danger fw-bold'>{uiError}</span>
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>


                <Button style={{ fontSize: '20px' }} className=' w-100 mx-auto d-block' variant="success" type="submit">Log In</Button>
            </Form>

            <div className='w-75 mx-auto mt-3'>
                <div>
                    <button onClick={handleGoogleLogin} style={{ color: 'white', backgroundColor: '#151a1e', fontSize: '20px' }} className='btn w-100 mx-auto d-block '>Continue With Google <FaGoogle /> </button>
                    <button onClick={handleGithubLogin} style={{ color: 'white', fontSize: '20px' }} className='btn btn-primary w-100 mx-auto d-block my-3'>Continue With Github <FaGithub /> </button>
                </div>
            </div>
        </div>

    );
};

export default Login;