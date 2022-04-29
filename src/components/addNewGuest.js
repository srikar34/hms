import React, { Component } from 'react';
import '../App.css';
// import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { FormGroup,Label,Col,Input,Form } from "reactstrap";
import ManagerPortalHeader from './managerPortalHeader';

class Rooms extends Component {
    render() {
        return(
            <div>
                <ManagerPortalHeader />
                <div className="row row-content"     style={{marginLeft:'auto'}}>
                    <h1 className='divcenter'>Assign Room to Guest</h1>
                        <div className="col-12 col-md-9">
                            <Form>
                                <FormGroup row>
                                    <Label id="guestname" md={2}><b>Guest Name</b></Label>
                                        <Col md={7}>
                                            <Input type="text" placeholder="enter name"/>
                                        </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label id="email" md={2}><b>Guest Email</b></Label>
                                        <Col md={7}>
                                            <Input type="text" placeholder="enter email-id"/>
                                        </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label id="roomno" md={2}><b>Room No.</b></Label>
                                        <Col md={7}>
                                            <Input type="text" placeholder="enter room number"/>
                                        </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label id="daysofstay" md={2}><b>Reservation for</b></Label>
                                        <Col md={7}>
                                            <Input type="text" placeholder="enter number of days"/>
                                        </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label id="billforstay" md={2}><b>Bill for Stay</b></Label>
                                        <Col md={7}>
                                            <Input type="text" placeholder="enter amount"/>
                                        </Col>
                                </FormGroup>
                            </Form>
                            <Button size='m' variant='primary' className="floatright" >Assign Room</Button>
                        </div>
                    </div>
            </div>
        ); 
    }
}

export default Rooms;