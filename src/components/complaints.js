import React from 'react';
import '../App.css';
import ManagerPortalHeader from './managerPortalHeader';
// import ActiveComplaints from './activeComplaints';
// import ClosedComplaints from './closedComplaints';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Complaints() {
        return(
            <div >
                <ManagerPortalHeader />
                <div className='wrapper'>
                <div >
                    <Link to="/manager/complaints/active">    
                        <Button size='lg' variant='outline-primary' >Active Complaints</Button>
                    </Link>
                </div>
                <br/>
                <div >
                    <Link to="/manager/complaints/closed">    
                        <Button size='lg' variant='outline-primary' >Resolved Complaints</Button>
                    </Link>
                </div>
            </div>
            </div>
        ); 
}

export default Complaints;