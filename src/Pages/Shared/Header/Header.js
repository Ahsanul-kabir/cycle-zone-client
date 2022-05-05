import React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar className="poppins-font fixed-top" bg="dark" variant="dark" expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">
                        <img className="header-menu" src='' alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <NavLink activeClassName="selected" to="/home">Home</NavLink>
                            <NavLink activeClassName="selected" to="/about">About</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;