import React, { useState,useEffect } from 'react';
import '../App.css';
import ManagerPortalHeader from './managerPortalHeader';
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
import { SERVICE_STATUS } from '../assets/statusValues';
       
function GuestServices(){
    const [services,setServices]=useState([]);
    const servicesCollectionRef = collection(db, "servicerecord");
    useEffect(()=>{
        const getServices = async () =>{
            const data = await getDocs(servicesCollectionRef);
            console.log(data);
            setServices(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
        };
        getServices();
    },[]);
        return(
            <div >
                <ManagerPortalHeader />
                <br/>
                <h1>Active Service Requests</h1>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Service ID</th>
                        <th>Room</th>
                        <th>Guest Name</th>
                        <th>Service</th>
                        <th>Status</th>
                        <th>Staff Details</th>
                        </tr>
                    </thead>
                    <tbody>
                    {services.map((service) =>
                        (
                            // const status = service.status;
                            <tr hidden={(service.status===SERVICE_STATUS.COMPLETED)}>
                            <th>{service.service_id}</th>
                            <th>{service.from_room}</th>
                            <th>{service.request_from}</th>
                            <th>{service.description}</th>
                            <th>{service.status}</th>
                            <th>{service.staff_name}</th>
                            </tr>
                    ))}
                    </tbody>
                </Table>
                <h1>Completed Service Requests</h1>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Service ID</th>
                        <th>Room</th>
                        <th>Guest Name</th>
                        <th>Service</th>
                        <th>Status</th>
                        <th>Staff Details</th>
                        </tr>
                    </thead>
                    <tbody>
                    {services.map((service) =>
                        (
                            // const status = service.status;
                            <tr hidden={!(service.status===SERVICE_STATUS.COMPLETED)}>
                            <th>{service.service_id}</th>
                            <th>{service.from_room}</th>
                            <th>{service.request_from}</th>
                            <th>{service.description}</th>
                            <th>{service.status}</th>
                            <th>{service.staff_name}</th>
                            </tr>
                    ))}
                    </tbody>
                </Table>
                <br/>
            </div>
        ); 
}

export default GuestServices;