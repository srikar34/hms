import React, { Component } from 'react';
import '../App.css';
import GuestPortalHeader from './guestPortalHeader';
import {Table} from 'react-bootstrap';

class GuestComplaints extends Component {
    render() {
        return(
            <div >
                <GuestPortalHeader />
                <br/>
                <h1>Complaints</h1>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Complaint ID</th>
                        <th>Complaint Type</th>
                        <th>Time</th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1234</td>
                        <td>Water Leakage</td>
                        <td>1.10 pm</td>
                        <td>Complaint under process</td>
                        </tr>
                        <tr>
                        <td>1274</td>
                        <td>Air Conditioning</td>
                        <td>2.10 pm</td>
                        <td>Complaint resolved</td>
                        </tr>
                        <tr>
                        <td>1264</td>
                        <td>Hot Water</td>
                        <td>3.10 pm</td>
                        <td>Complaint resolved</td>
                        </tr>
                    </tbody>
                </Table>
                <br/>
            </div>
        ); 
    }
}

export default GuestComplaints;