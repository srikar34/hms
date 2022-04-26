import React, { Component } from 'react';
import '../App.css';
import GuestPortalHeader from './guestPortalHeader';
import {Table} from 'react-bootstrap';

class GuestServices extends Component {
    render() {
        return(
            <div >
                <GuestPortalHeader />
                <br/>
                <h1>Service Requests</h1>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Service ID</th>
                        <th>Service</th>
                        <th>Status</th>
                        <th>Time of Request</th>
                        <th>Staff Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1234</td>
                        <td>Room Cleaning</td>
                        <td>Staff Assigned</td>
                        <td>1.10 pm</td>
                        <td>Balaram Sai</td>
                        </tr>
                        <tr>
                        <td>1274</td>
                        <td>Laundry</td>
                        <td>Completed</td>
                        <td>11.40 am</td>
                        <td>Balaram Sai</td>
                        </tr>
                        <tr>
                        <td>1264</td>
                        <td>Spa</td>
                        <td>Completed</td>
                        <td>10.50 am</td>
                        <td>Balaram Sai</td>
                        </tr>
                    </tbody>
                </Table>
                <br/>
            </div>
        ); 
    }
}

export default GuestServices;