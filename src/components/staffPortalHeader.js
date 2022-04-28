import { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { STAFF } from '../assets/names';

class StaffPortalHeader extends Component {
    render(){
        return(
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Hello {STAFF}</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/staff/profile">Profile</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

export default StaffPortalHeader;