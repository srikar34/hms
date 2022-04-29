import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import ManagerPortalHeader from './managerPortalHeader';

class Rooms extends Component {
    render() {
        return(
            <div >
                <ManagerPortalHeader />
                <div className='wrapper'>
                    <div >
                        <Link to="/manager/rooms/addguest">    
                            <Button size='lg' variant='outline-dark' >Add a new guest</Button>
                        </Link>
                    </div>
                    <br/>
                    <div >
                        <Link to="/manager/rooms/updatestatus">    
                            <Button size='lg' variant='outline-dark' >Update Room status</Button>
                        </Link>
                    </div>
                    <br/>
                    <div >
                        <Link to="/manager/rooms/checkallroomdetails">    
                            <Button size='lg' variant='outline-dark' >Check all room details</Button>
                        </Link>
                    </div>
                </div>
            </div>
        ); 
    }
}

export default Rooms;