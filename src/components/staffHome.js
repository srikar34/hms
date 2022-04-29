import React, { Component } from 'react'; 
import { Button } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import StaffPortalHeader from './staffPortalHeader';
import { FormGroup,Label,Col,Input } from "reactstrap";


class Guest extends Component {
    render(){
        return(
            <div>
                <StaffPortalHeader/>
                <div className='center'>
                    <div>
                        Current Work Assigned
                    </div>
                    <br/>
                    <div>
                        Room Number : C212
                    </div>
                    <br/>
                    <div>
                        Number of Guests : 2 
                    </div>
                    <br/>
                    <div>
                        Service Name : Laundry
                    </div>
                    <br/>
                    <div>
                        Update Status:
                        <DropdownButton id="dropdown-basic-button" title="Select Service">
                        <Dropdown.Item href="#/action-1">Staff Assigned</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">In Progress</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Completed</Dropdown.Item>
                        </DropdownButton>
                        <Button size='m' variant='outline-primary' >Click here</Button>
                    </div>
                    <br/>
                    <div>
                        <FormGroup row>
                                <Label  md={2}><b>Add Bill</b></Label>
                                <Col  md={2}>
                                    <Input type="textarea" rows="1" placeholder="Enter Bill Here"/>
                                </Col>
                                <Button size='m' variant='primary' style={{float:"center"}} >submit</Button>
                            </FormGroup> 
                            
                    </div>
                    <br/>
                </div>
            </div>
        );
    }
}

export default Guest;