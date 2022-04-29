import React, { Component } from 'react';
import '../App.css';
import GuestPortalHeader from './guestPortalHeader';
import {Table} from 'react-bootstrap';

class Services extends Component {
    render() {
        return(
            <div >
                <GuestPortalHeader />
                <br/>
                <h1>Bill Details</h1>
                <Table striped bordered hover size="sm" variant='light'>
                    <thead>
                        <tr>
                        <th>Bill no.</th>
                        <th>Service</th>
                        <th>remarks</th>
                        <th>Amount (INR)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Room rent</td>
                        <td>for 2 days stay</td>
                        <td>1000</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Laundry</td>
                        <td></td>
                        <td>200</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Spa</td>
                        <td>head massage</td>
                        <td>350</td>
                        </tr>
                    </tbody>
                </Table>
                <br/>
            </div>
        ); 
    }
}

export default Services;