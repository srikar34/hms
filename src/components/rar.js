import React, { Component } from 'react';
import '../App.css';
import { Navbar,Nav,Table } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { MANAGER } from '../assets/names';

class Rar extends Component {
    render() {
        return(
            <div >
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
                <br/>
                <h1>Ratings and Reviews</h1>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Guest Name</th>
                        <th>Rating</th>
                        <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Mark</td>
                        <td>4/5</td>
                        <td>Great Stay</td>
                        </tr>
                        <tr>
                        <td>Jacob</td>
                        <td>3.5/5</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>Larry the Bird</td>
                        <td>5/5</td>
                        <td>Good staff</td>
                        </tr>
                    </tbody>
                </Table>
                <br/>
            </div>
        ); 
    }
}

export default Rar;