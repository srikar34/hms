import { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { STAFF } from '../assets/names';

class StaffPortalHeader extends Component {
    render(){
        return(
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Hello {STAFF}</Navbar.Brand>
                </Container>
            </Navbar>
        );
    }
}

export default StaffPortalHeader;