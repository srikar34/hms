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

function CheckAllRoomDetails() {
    const [roominfo,setRoominfo]=useState([]);
    const roominfoCollectionRef = collection(db, "roomrecord");
    useEffect(()=>{
        const getRoominfo = async () =>{
            const data = await getDocs(roominfoCollectionRef);
            console.log(data);
            setRoominfo(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
        };
        getRoominfo();
    },[]);
    return(
        <div >
            <ManagerPortalHeader />
            <h1 className='h1center'>Room Records</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Room Number</th>
                    <th>Guest Name</th>
                    <th>Guest email</th>
                    <th>Number of Guests</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                {roominfo.map((roominfom) =>
                    (
                        // const status = roominfom.status;
                        <tr>
                        <th>{roominfom.room_number}</th>
                        <th>{roominfom.name}</th>
                        <th>{roominfom.email_id}</th>
                        <th>{roominfom.num_guests}</th>
                        <th>{roominfom.status}</th>
                        </tr>
                ))}
                </tbody>
            </Table>
            <br/>
        </div>
    );
}

export default CheckAllRoomDetails;
