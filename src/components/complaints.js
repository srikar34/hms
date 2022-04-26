import React, { Component } from 'react';
import '../App.css';
import { Navbar,Nav,Table } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { MANAGER } from '../assets/names';
import { Button } from 'react-bootstrap';

class Complaints extends Component {
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
                <h1>Active Complaints</h1>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Room No</th>
                        <th>Guest Name</th>
                        <th>Complaint id</th>
                        <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>32</td>
                        <td>Water leak</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>65</td>
                        <td>Internet issue</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Larry the Bird</td>
                        <td>76</td>
                        <td>Internet issue</td>
                        </tr>
                    </tbody>
                </Table>
                <br/>

                <div>
                    {/* <div> */}
                            <Button size='lg' variant='outline-primary' >Update Status</Button>
                    {/* </div> */}
                </div>

                <br/>
                <h1>Closed Complaints</h1>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Room No</th>
                        <th>Guest Name</th>
                        <th>Complaint id</th>
                        <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>34</td>
                        <td>Electricity outage</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>35</td>
                        <td>Matress issue</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>72</td>
                        <td>Water leak</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        ); 
    }
}

export default Complaints;