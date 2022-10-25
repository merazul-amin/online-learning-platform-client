import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/UserContext/UserContext';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom";
import './HeaderNav.module.css';

import { toast } from 'react-toastify';
const HeaderNav = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
                toast.success('Successfully Logged Out')
            }).catch((error) => {
                // An error happened.
            });
    }
    return (
        <Navbar bg="info" expand="lg">
            <Container fluid>
                <Navbar.Brand >
                    <Link style={{ textDecoration: 'none', fontWeight: 'bold' }} to='/'><span className='fs-2'>Online Learning</span></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <><NavLink style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', margin: '0 10px' }} to='/'>Home</NavLink></>

                        <><NavLink style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', margin: '0 10px' }} to='/courses'>Courses</NavLink></>

                        <><NavLink style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', margin: '0 10px' }} to='/blogs'>Blogs</NavLink></>

                    </Nav>
                    <div>
                        {user && user?.uid ?
                            <button onClick={handleLogOut} className='btn btn-danger'>LogOut</button>
                            :
                            <>
                                <Link to='/login'><button className="btn btn-success mx-2">Log In</button></Link>

                                <Link to='/register'><button className="btn btn-warning">Register</button></Link>
                            </>
                        }
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HeaderNav;