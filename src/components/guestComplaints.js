import React, { Component } from 'react';
import '../App.css';
import GuestPortalHeader from './guestPortalHeader';
import {Table} from 'react-bootstrap';
import {db} from '../firebase-config';
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";
import { useState, useEffect } from 'react';
import { COMPLAINT_STATUS } from '../assets/statusValues';

function GuestComplaints () {


    const [complaints,setComplaints]=useState([]);
    const complaintsCollectionRef = collection(db, "complaintrecord");

    const filt = (doc) => {
        return doc.data().from_email === JSON.parse(localStorage.getItem('guest')).email;
    }

    useEffect(()=>{
        const getComplaints = async () =>{
            const data = await getDocs(complaintsCollectionRef);
            console.log(data);
            const comp = data.docs.filter(filt);
            setComplaints(comp.map((doc)=>(doc.data())));
        };
        getComplaints();
    },[]);

    return(
        <div >
            <GuestPortalHeader />
            {/* <br/> */}
            <h1>Active Complaints</h1>
            <Table striped bordered hover size="sm" variant='light'>
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
                            <tr hidden={!(complaint.status==COMPLAINT_STATUS.ACTIVE)}>
                            <th>{complaint.from_room}</th>
                            <th>{complaint.from_email}</th>
                            <th>{complaint.complaint_id}</th>
                            <th>{complaint.description}</th>
                            </tr>
                    ))}
                </tbody>
            </Table>
            <br/>
            <h1>Resolved Complaints</h1>
                <Table striped bordered hover size="sm" variant='light'>
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
                            <tr hidden={(complaint.status==COMPLAINT_STATUS.ACTIVE)}>
                            <th>{complaint.from_room}</th>
                            <th>{complaint.from_email}</th>
                            <th>{complaint.complaint_id}</th>
                            <th>{complaint.description}</th>
                            </tr>
                    ))}
                    </tbody>
                </Table>
            <br/>
        </div>
    ); 
}


// class GuestComplaints extends Component {
//     render() {
//         return(
//             <div >
//                 <GuestPortalHeader />
//                 <br/>
//                 <h1>Complaints</h1>
//                 <Table striped bordered hover size="sm">
//                     <thead>
//                         <tr>
//                         <th>Complaint ID</th>
//                         <th>Complaint Type</th>
//                         <th>Time</th>
//                         <th>Status</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                         <td>1234</td>
//                         <td>Water Leakage</td>
//                         <td>1.10 pm</td>
//                         <td>Complaint under process</td>
//                         </tr>
//                         <tr>
//                         <td>1274</td>
//                         <td>Air Conditioning</td>
//                         <td>2.10 pm</td>
//                         <td>Complaint resolved</td>
//                         </tr>
//                         <tr>
//                         <td>1264</td>
//                         <td>Hot Water</td>
//                         <td>3.10 pm</td>
//                         <td>Complaint resolved</td>
//                         </tr>
//                     </tbody>
//                 </Table>
//                 <br/>
//             </div>
//         ); 
//     }
// }

export default GuestComplaints;