import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import '../App.css';


const NavBar = () => {

    const logOut = () => {
        localStorage.removeItem('user');
    }
    return (
        <>
            <Navbar bg="dark" expand="md" variant="dark">
                <Container>
                    <Navbar.Brand >
                        <h4>
                            <Link to="/" className="letter__ti">Experts</Link>
                        </h4>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="space">
                            <Link to="/home" className="letter">Home</Link>
                            <Link to="/register" className="letter">Perfil</Link>
                            <Link to="/" onClick={logOut} className="letter">Salir</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;