import React from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <>
            <div className='container-fluid top-banner'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <p>Keep learning with free resources</p>
                        </div>
                        <div className='col d-flex justify-content-end'>
                            <Nav.Link as={NavLink} to="/login"><FaSignInAlt /><span className='ms-2'>Login</span></Nav.Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid shadow-lg navigation-area'>
                <Navbar bg="white" expand="lg">

                    <Container className='' bg="primary" >
                        <Navbar.Brand href="#">
                            <img src={logo} alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mx-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                                <Nav.Link as={NavLink} to="/courses">Courses</Nav.Link>
                                <Nav.Link as={NavLink} to="/faq">FAQ</Nav.Link>
                                <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>

                            </Nav>
                            <div>
                                <Nav.Link as={NavLink} to="/register">
                                    <button className="btns">Register Now</button>
                                </Nav.Link>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
};

export default Header;