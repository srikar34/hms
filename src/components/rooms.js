import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Navbar,Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { MANAGER } from '../assets/names';

class Rooms extends Component {
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
                <div className='wrapper'>
                    <div >
                        <Link to="/manager">    
                            <Button size='lg' variant='outline-primary' >Add a new guest</Button>
                        </Link>
                    </div>
                    <br/>
                    <div >
                        <Link to="/manager">    
                            <Button size='lg' variant='outline-primary' >Update Room status</Button>
                        </Link>
                    </div>
                    <br/>
                    <div >
                        <Link to="/manager">    
                            <Button size='lg' variant='outline-primary' >Check all room details</Button>
                        </Link>
                    </div>
                </div>
            </div>
        ); 
    }
}

export default Rooms;