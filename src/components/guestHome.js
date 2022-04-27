import React, { Component } from 'react'; 
import GuestPortalHeader from './guestPortalHeader';
import { Button } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import Login from './Login';


class Guest extends Component {
    render(){
        return(
            <div>
                <GuestPortalHeader />
                <div className='left'>
                    <div>
                        Current Booking Details 
                    </div>
                    <br/>
                    <div>
                        Room Number : C212
                    </div>
                    <br/>
                    <div>
                        Number of Guests : 2 
                    </div>
                </div>
                <div className='left'>
                    <div>
                        Need a Service?
                        <DropdownButton id="dropdown-basic-button" title="Select Service">
                        <Dropdown.Item href="#/action-1">Room Cleaning</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Laundry</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Spa</Dropdown.Item>
                        </DropdownButton>
                        <Button size='m' variant='outline-primary' >Click here</Button>
                    </div>
                    <br/>
                    <div>
                        Have a Complaint?
                        <DropdownButton id="dropdown-basic-button" title="Select Category">
                        <Dropdown.Item href="#/action-1">Room Cleaning</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Laundry</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Spa</Dropdown.Item>
                        </DropdownButton>
                        <Button size='m' variant='outline-primary' >Click here</Button>
                    </div>
                    <br/>
                    <div>
                        Contact Helpline?
                        <Button size='m' variant='outline-primary' >Click here</Button>
                    </div>
                    <br/>
                    <Login/>
                </div>
            </div>
        );
    }
}

export default Guest;