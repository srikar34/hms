import { Component } from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { GUEST } from '../assets/names';

class GuestPortalHeader extends Component {
    render(){
        return(
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/guest">Hello {GUEST}</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/guest/services">Services</Nav.Link>
                        <Nav.Link href="/guest/complaints">Complaints</Nav.Link>
                        <Nav.Link href="/guest/bill">Bill</Nav.Link>
                        <Nav.Link href="/guest/rar">Ratings and Reviews</Nav.Link>
                        <Nav.Link href="/guest/profile">Profile</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

export default GuestPortalHeader;