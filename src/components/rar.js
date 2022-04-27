import React, { Component } from 'react';
import '../App.css';
import {Table } from 'react-bootstrap';
import ManagerPortalHeader from './managerPortalHeader';

class Rar extends Component {
    render() {
        return(
            <div>
                <ManagerPortalHeader />
                <br/>
                <h1>Ratings and Reviews</h1>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Guest Name</th>
                        <th>Rating</th>
                        <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Mark</td>
                        <td>4/5</td>
                        <td>Great Stay</td>
                        </tr>
                        <tr>
                        <td>Jacob</td>
                        <td>3.5/5</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>Larry the Bird</td>
                        <td>5/5</td>
                        <td>Good staff</td>
                        </tr>
                    </tbody>
                </Table>
                <br/>
            </div>
        ); 
    }
}

export default Rar;