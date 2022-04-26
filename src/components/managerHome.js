import React, { Component } from 'react'; 
import { Navbar,Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { MANAGER } from '../assets/names';
class Manager extends Component {
    render(){
        return(
            <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/manager">Hello {MANAGER}</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Rooms</Nav.Link>
                            <Nav.Link href="/">Services</Nav.Link>
                            <Nav.Link href="/">Complaints</Nav.Link>
                            <Nav.Link href="/">Ratings and Reviews</Nav.Link>
                        </Nav>
                    </Container>
            </Navbar>
        );
    }
}

export default Manager;