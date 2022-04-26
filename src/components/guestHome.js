import React, { Component } from 'react'; 
import GuestPortalHeader from './guestPortalHeader';

class Guest extends Component {
    render(){
        return(
            <div>
            <GuestPortalHeader />
            <div class="center">Use navigation bar to move across various sections</div>
            </div>
        );
    }
}

export default Guest;