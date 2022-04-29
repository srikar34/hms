import { Component } from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { MANAGER } from '../assets/names';
import { managerEmail } from './managerLogin';

class ManagerPortalHeader extends Component {
    render(){
        return(
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/manager">Hello {MANAGER}</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/manager/rooms">Rooms</Nav.Link>
                        <Nav.Link href="/manager/services">Services</Nav.Link>
                        <Nav.Link href="/manager/complaints">Complaints</Nav.Link>
                        <Nav.Link href="/manager/rar">Ratings and Reviews</Nav.Link>
                        <Nav.Link href="/manager/profile">Profile</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

export default ManagerPortalHeader;