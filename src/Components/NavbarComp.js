import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComp = () =>{
    return (
        <Navbar bg="dark" variant='dark' sticky='top'>
            <Container>
                <Navbar.Brand>Task Manager</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavbarComp;