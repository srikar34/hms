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
import { SERVICE_STATUS } from '../assets/statusValues';

export default function GuestServices () {
    const [services,setServices]=useState([]);
    // const services = useRef([]);
    const servicesCollectionRef = collection(db, "servicerecord");

    const filt = (doc) => {
        return doc.data().guest_email === JSON.parse(localStorage.getItem('guest')).email;
    }
    useEffect(()=>{
        const getServices = async () =>{
            const data = await getDocs(servicesCollectionRef);
            // console.log(data.docs.map((doc)=>{console.log(doc.data())}));
            const serv = data.docs.filter(filt);
            // console.log(serv.map((doc)=>{console.log(doc.data())}));
            setServices(serv.map((doc)=>(doc.data())));
        };
        getServices();
    },[]);

    return(
        <div >
            <GuestPortalHeader />
            <br/>
            <h1>Service Requests</h1>
            <Table striped bordered hover size="sm" variant='light'>
                <thead>
                    <tr>
                    <th>Service ID</th>
                    <th>Room</th>
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
                            <th>{service.description}</th>
                            <th>{service.status}</th>
                            <th>{service.staff_name}</th>
                            </tr>
                    ))}

                </tbody>
            </Table>
            {/* <h1>Completed Service Requests</h1> */}
            {/* </Table> */}
                <h1>Completed Service Requests</h1>
                <Table striped bordered hover size="sm" variant='light'>
                    <thead>
                        <tr>
                        <th>Service ID</th>
                        <th>Room</th>
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

// class GuestServices extends Component {
//     render() {
        
//     }
// }

// export default GuestServices;