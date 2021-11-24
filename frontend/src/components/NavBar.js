import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" expand="md" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Experts</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;