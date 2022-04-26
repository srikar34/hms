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