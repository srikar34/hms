import React, { Component } from 'react';
import '../App.css';
import ManagerPortalHeader from './managerPortalHeader';
import {Table} from 'react-bootstrap';

class Services extends Component {
    render() {
        return(
            <div >
                <ManagerPortalHeader />
                <br/>
                <h1>Active Requests</h1>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Room No</th>
                        <th>Guest Name</th>
                        <th>Request id</th>
                        <th>Service</th>
                        <th>Staff Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>124</td>
                        <td>House Keeping</td>
                        <td>Ronnie</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>169</td>
                        <td>Laundry</td>
                        <td>Fathi</td>
                        </tr>
                    </tbody>
                </Table>
                <br/>

                

                <h1>Completed Requests</h1>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Room No</th>
                        <th>Guest Name</th>
                        <th>Request id</th>
                        <th>Service</th>
                        <th>Staff Name</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>3</td>
                        <td> Larry</td>
                        <td>172</td>
                        <td>Sink blocked</td>
                        <td>Balli</td>
                        </tr>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>23</td>
                        <td>Spa</td>
                        <td>Mab</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        ); 
    }
}

export default Services;