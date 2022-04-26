import React, { Component } from 'react';
import '../App.css';
import { Navbar,Nav,Table } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { MANAGER } from '../assets/names';

class Services extends Component {
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
                <h1>Active Requests</h1>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Room No</th>
                        <th>Guest Name</th>
                        <th>Request id</th>
                        <th>Staff Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>124</td>
                        <td>Ronnie</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>169</td>
                        <td>Fathi</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td> Larry</td>
                        <tr>172</tr>
                        <td>Balli</td>
                        </tr>
                    </tbody>
                </Table>
                <br/>

                

                <h1>Completed Requests</h1>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Room No</th>
                        <th>Guest Name</th>
                        <th>Request id</th>
                        <th>Staff Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>23</td>
                        <td>Mab</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>43</td>
                        <td>Faf</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Bob</td>
                        <td>55</td>
                        <td>Bali</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        ); 
    }
}

export default Services;