import React, { Component } from 'react'; 
import { Navbar,Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { MANAGER } from '../assets/names';

class Manager extends Component {
    render(){
        return(
            <div>
            <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/manager">Hello {MANAGER}</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/manager/rooms">Rooms</Nav.Link>
                            <Nav.Link href="/manager/services">Services</Nav.Link>
                            <Nav.Link href="/manager/complaints">Complaints</Nav.Link>
                            <Nav.Link href="/manager/rar">Ratings and Reviews</Nav.Link>
                        </Nav>
                    </Container>
            </Navbar>
            <div class="center">Use navigation bar to move across various sections</div>
            </div>
        );
    }
}

export default Manager;