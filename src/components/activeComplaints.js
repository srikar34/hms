import React, { Component } from 'react';
import '../App.css';
import { Button, Table } from 'react-bootstrap';
import ManagerPortalHeader from './managerPortalHeader';

class ActiveComplaints extends Component {
    render() {
        return(
            <div >
                <ManagerPortalHeader />
                <h1>Active Complaints</h1>
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
                        <td>32</td>
                        <td>Water leak</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>65</td>
                        <td>Internet issue</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Larry the Bird</td>
                        <td>76</td>
                        <td>Internet issue</td>
                        </tr>
                    </tbody>
                </Table>
                <br/>

                <div >
                    <Button size='lg' variant='primary'  >Update Status</Button>
                </div>

                <br/>
            </div>
        ); 
    }
}

export default ActiveComplaints;