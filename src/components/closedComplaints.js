import React, { Component } from 'react';
import '../App.css';
import { Table } from 'react-bootstrap';
import ManagerPortalHeader from './managerPortalHeader';

class ClosedComplaints extends Component {
    render() {
        return(
            <div >
                <ManagerPortalHeader />
                <h1>Resolved Complaints</h1>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Room No</th>
                        <th>Guest Name</th>
                        <th>Complaint id</th>
                        <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>34</td>
                        <td>Electricity outage</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>35</td>
                        <td>Matress issue</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>72</td>
                        <td>Water leak</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        ); 
    }
}

export default ClosedComplaints;