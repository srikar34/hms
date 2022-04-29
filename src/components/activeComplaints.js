import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button, Table } from 'react-bootstrap';
import ManagerPortalHeader from './managerPortalHeader';
import {db} from '../firebase-config';
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";
import { COMPLAINT_STATUS } from '../assets/statusValues';

function ActiveComplaints(){
        const [complaints,setComplaints]=useState([]);
        const complaintsCollectionRef = collection(db, "complaintrecord");
        useEffect(()=>{
            const getComplaints = async () =>{
                const data = await getDocs(complaintsCollectionRef);
                console.log(data);
                setComplaints(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
            };
            getComplaints();
        },[]);
        return(
            <div >
                <ManagerPortalHeader />
                <h1 className='h1center'>Active Complaints</h1>
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
                    {complaints.map((complaint) =>
                        (
                            // const status = complaint.status;
                            <tr hidden={!(complaint.status===COMPLAINT_STATUS.ACTIVE)}>
                            <th>{complaint.from_room}</th>
                            <th>{complaint.from_email}</th>
                            <th>{complaint.complaint_id}</th>
                            <th>{complaint.description}</th>
                            </tr>
                    ))}
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

export default ActiveComplaints;