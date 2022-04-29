import React, { Component } from 'react'; 
import { Button } from 'react-bootstrap';
import GuestPortalHeader from './guestPortalHeader';
import { GUEST } from '../assets/names';

class GuestProfile extends Component {
    render(){
        return(
            <div>
                <GuestPortalHeader/>
                <h1 className='h1center'>
                    Your Profile
                </h1>
                <div className='center'>
                    <div>
                        <Button size='m' variant='outline-primary' >Save</Button>
                        <Button size='m' variant='outline-primary' >Edit</Button>
                    </div>
                </div>
                <div className='left'>
                    <div>
                        Full Name : {GUEST}
                        Gender: Male
                    </div>
                </div>
            </div>
        );
    }
}

export default GuestProfile;