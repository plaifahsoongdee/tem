import React from 'react';
import { Navbar, Form, FormControl, Nav } from 'react-bootstrap';
import { FaSearch, FaUserCircle } from 'react-icons/fa';

function Header() {
    return (
        
        <Navbar bg="light" expand="lg" className="mb-4" style={{ backgroundColor: '#FFF0F5' }}>
            <Navbar.Brand href="#home" style={{ fontFamily: 'Comic Sans MS', color: '#FF69B4' }}>Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <FaSearch style={{ color: '#FF69B4' }} />
                    </Form>
                    <Nav.Link href="#profile">
                        <FaUserCircle style={{ color: '#FF69B4', fontSize: '24px' }} />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
