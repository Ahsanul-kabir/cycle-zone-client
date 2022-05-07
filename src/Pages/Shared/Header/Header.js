import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/unicycle.png'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <header>
            <Navbar className="poppins-font fixed-top" bg="dark" variant="dark" expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">
                        <img className="header-menu" src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <NavLink as={Link} activeClassName="selected" to="home">Home</NavLink>
                            <NavLink as={Link} activeClassName="selected" to="about">About</NavLink>
                            {
                                user?.email ? <>
                                    <NavLink as={Link} activeClassName="selected" to="/addItem">Add Item</NavLink>
                                </> : ''
                            }
                        </Nav>

                        {user?.email ?
                            <button onClick={handleSignOut} className="btn btn-outline-light">log out</button> :
                            <NavLink as={Link} className="btn btn-light" to="login">Login</NavLink>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;