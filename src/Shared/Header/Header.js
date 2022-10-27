import React, { useContext } from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router-dom';
import { FaSignInAlt, FaUser } from 'react-icons/fa';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const Header = () => {
    const { user, logout } = useContext(AuthContext);


    const logOut = () => {
        logout()
            .then(() => { })
            .catch(e => console.error(e))
    }
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {user?.displayName}
        </Tooltip>)
    return (

        <>

            <div className='container-fluid top-banner'>
                <div className='container-fluid'>
                    <div className='row d-flex justify-content-center align-content-center'>
                        <div className='col '>
                            <p>Keep learning with free resources</p>
                        </div>
                        <div className='user-title col d-flex justify-content-end '>
                            <Link className=''>
                                {user?.uid ?
                                    <>
                                        <span className=''>{user?.displayName}</span>
                                    </>
                                    :
                                    <>
                                        <Nav.Link as={Link} className='ms-3 btns' to="/login">
                                            <FaSignInAlt /><span className='ms-2 '><button className="btns">Login</button></span></Nav.Link>
                                    </>
                                }
                            </Link>
                            <OverlayTrigger
                                placement="bottom"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}><Link to='/profile' className='ms-3'>
                                    {user?.photoURL ?
                                        <Image
                                            style={{ height: '40px', width: '40px' }}
                                            roundedCircle
                                            src={user.photoURL}>

                                        </Image>
                                        :
                                        <FaUser></FaUser>
                                    }
                                </Link></OverlayTrigger>


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
                                {user?.uid ?
                                    <>
                                        <button className='btns' onClick={logOut}>LogOut</button>
                                    </>
                                    :
                                    <>
                                        <Nav.Link as={NavLink} to="/register">
                                            <button className="btns">Register Now</button>
                                        </Nav.Link>
                                    </>
                                }

                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
};

export default Header;