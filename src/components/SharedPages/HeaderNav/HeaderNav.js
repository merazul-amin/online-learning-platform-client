import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/UserContext/UserContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom";
import './HeaderNav.css';
import Image from 'react-bootstrap/Image'
import { toast } from 'react-toastify';
import { FaUserAlt } from 'react-icons/fa';
import { ImCompass } from "react-icons/im";
import ToggleTheme from '../ToggleTheme/ToggleTheme';

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
        <Navbar style={{ backgroundColor: '#0B3D60', marginBottom: '25px' }} expand="lg">
            <Container fluid >
                <Navbar.Brand >

                    <Link style={{ textDecoration: 'none', fontWeight: 'bold', color: 'white' }} to='/'><span className='fs-2'>  <ImCompass />Online Learning</span></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 "
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <><NavLink style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', margin: '0 10px' }} to='/'>Home</NavLink></>

                        <><NavLink style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', margin: '0 10px' }} to='/courses'>Courses</NavLink></>

                        <><NavLink style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', margin: '0 10px' }} to='/blogs'>Blogs</NavLink></>
                        <><NavLink style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', margin: '0 10px' }} to='/'>FAQ</NavLink></>


                    </Nav>
                    <div>
                        <ToggleTheme label='notification'></ToggleTheme>
                    </div>
                    <div className='mx-3 mt-2'>
                        {
                            user && user?.uid ?
                                <>
                                    <p style={{ cursor: 'pointer' }} title={user?.displayName}>
                                        <Image roundedCircle style={{ height: "40px" }} src={user.photoURL}></Image>
                                    </p>
                                </>
                                :
                                <>
                                    <p style={{ color: 'white' }}><FaUserAlt /></p>
                                </>

                        }
                    </div>
                    <div>
                        {user && user?.uid ?
                            <button onClick={handleLogOut} className='btn btn-danger'>LogOut</button>
                            :
                            <>
                                <Link to='/login'><button className="btn btn-success mx-2">Log In</button></Link>
                                <Link to='/register'><button className="btn btn-primary mx-2">Register</button></Link>
                            </>
                        }
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HeaderNav;