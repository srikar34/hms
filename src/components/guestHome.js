import React, { Component, useEffect } from 'react'; 
import { useNavigate } from "react-router-dom";
import GuestPortalHeader from './guestPortalHeader';
import { Button } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { Form, FormGroup, Col, Label, Input} from 'reactstrap';
import { COMPLAINT_STATUS, SERVICES, SERVICE_STATUS, STAFF_STATUS } from '../assets/statusValues';
import { async } from '@firebase/util';
import { doc,updateDoc,getDocs, addDoc, collection, query, where, onSnapshot } from "firebase/firestore";
import {db} from "../firebase-config";
import { GUEST } from '../assets/guestDetails';
import { useState } from 'react';
import { guestEmail,userEmail } from './login';
import { auth } from "../firebase-config";
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";

function Guest() {
    const navigate = useNavigate();


    const [selected_service,setSelectedService] = useState(null);
    const [complaint,setComplaint] = useState(null);
    // const [complaintSubmit,setBool] = useState(false);
    // const [guestDetails, setGuestDetails] = useState(getGuestDetails());
    var maxServiceId = 3;
    var maxComplaintId = 3;
    const usersCollectionRef = collection(db, "users");
    const servicerecordCollectionRef = collection(db, "servicerecord");
    const complaintrecordCollectionRef = collection(db, "complaintrecord");

    
    const logout = async () => {
        await signOut(auth);
        localStorage.removeItem('guest');
         navigate('/');
      };

    const ff = (doc) => {
        return doc.data().email_id == guestEmail
    }

    // const [user, setUser] = useState(null);
    useEffect(()=>{
        // localStorage.setItem('guest',JSON.stringify(guestDetails));
        const getUser = async ()=>{
            const data  = await getDocs(usersCollectionRef);
            const user = data.docs.filter(ff)[0].data();
            console.log(user);
            localStorage.setItem('guest',JSON.stringify({
                name : user.name,
                noOfGuests : user.no_of_guests,
                roomNo : user.room_number,
                email : user.email_id
            }));
            console.log(localStorage.getItem('guest'));
            // data.docs.map((doc) => {console.log(doc.data())});
            // const user = data.docs.filter(ff)[0].data();
            // setUser(user);
            // GUEST.NAME = user.name;
            // GUEST.GENDER = user.gender;
            // GUEST.NO_OF_GUESTS = user.no_of_guests;
            // GUEST.ROOM_NO = user.room_number;
        };
        getUser();

    },[]);


    const handleService = (e) => {
        if(e.target.value==="--select service--"){
            setSelectedService(null);
        }
        else{
            setSelectedService(e.target.value);
        }
    }

    const handleComplaint = (e) => {
        setComplaint(e.target.value);
    }

    const getRoom = () => {
        if(localStorage.getItem('guest')){
            console.log("room no = " + JSON.parse(localStorage.getItem('guest')).roomNo)
            return JSON.parse(localStorage.getItem('guest')).roomNo;
        }
        else{
            return null;
        }
    }

    const getCount = () => {
        if(localStorage.getItem('guest')){  
            console.log("count = " + JSON.parse(localStorage.getItem('guest')).noOfGuests);

            return JSON.parse(localStorage.getItem('guest')).noOfGuests;
        }
        else{
            return null;
        }
    }
    // if(snapshot.empty){
    //     console.log('No matching documents');
    //     return;
    // }
    // snapshot.forEach(doc => {
    //     console.log(doc.id, '=>', doc.data());
    // });
    // onSnapshot(q, (snapshot) => {
    //     let books = []
    //     snapshot.docs.forEach((doc) =>{
    //         books.push({ ...doc.data(), id: doc.id})
    //     })
    //     console.log(books)
    // })
    const resetComplaint = () => {
        setComplaint(null);
    }

    const resetRequest = () => {
        setSelectedService(null);
    }

    // const filt = (doc) => {
    //     console.log(this);
    //     console.log(doc.data());
    //     return doc.data().status === STAFF_STATUS.AVAILABLE && doc.data().division === this
    // }

    function filt(div){
        return function(doc) {
            console.log(doc.data());
            console.log(div);
            return doc.data().status === STAFF_STATUS.AVAILABLE && doc.data().division === div
        }
    }

    const filterSR = (doc) => {
        return doc.data() === this
    }

    const createServiceReq = async(obj) => {
        console.log("obj = ");
        console.log(obj);
        await addDoc(servicerecordCollectionRef,obj);

        const staffCollectionRef = collection(db, "staff");
        const data  = await getDocs(staffCollectionRef);
        // const availableStaff = data.docs.filter(filt(obj.selected_service));
        const availableStaff = data.docs.filter((doc) => {
            return (doc.data().status === STAFF_STATUS.AVAILABLE && doc.data().division === obj.description)});
        console.log(availableStaff.length)
        // console.log(availableStaff[0].data());    
        if(availableStaff.length > 0){
            
            const idx = Math.floor(Math.random()*availableStaff.length);
            console.log(idx);
            console.log(availableStaff[idx].data());
            const StaffName = availableStaff[idx].data().name;
            console.log(StaffName);
            const record = doc(db,"staff",availableStaff[idx].id);
            const newfields = {status : STAFF_STATUS.BUSY};
            await updateDoc(record,newfields);

            const serviceRecords = await getDocs(servicerecordCollectionRef);
            console.log("test sttatement")
            //console.log(doc.data());
            console.log(obj);
            const servs = serviceRecords.docs.filter((doc) => {
                // console.log(doc.data().request_from + " ff1 " + obj.request_from);
                // console.log(doc.data().description  + " ff2 " + obj.description )
                
                return (doc.data().request_from === obj.request_from && doc.data().description === obj.description)});
            console.log(servs.length);
            console.log(servs);
            const servRecord = doc(db,"servicerecord",servs[0].id);
            const newFields = {status : SERVICE_STATUS.ASSIGNED, staff : StaffName};
            await updateDoc(servRecord,newFields);

        }
    }
    const createComplaintReq = async(obj) => {
        await addDoc(complaintrecordCollectionRef,obj);
    }

    const onComplaint = () => {
        const id = Math.floor(Math.random()*10000);
        const obj = {
            complaint_id: id,
            description:complaint, 
            from_email:JSON.parse(localStorage.getItem('guest')).email, 
            from_room:JSON.parse(localStorage.getItem('guest')).roomNo,
            reply:"", 
            status:COMPLAINT_STATUS.ACTIVE
        }
        console.log(obj);
        createComplaintReq(obj);
        resetComplaint();
        // setBool(true);
    }

    const onService = () => {
        const id = Math.floor(Math.random()*10000);
        const obj = {
            description:selected_service,
             from_room:JSON.parse(localStorage.getItem('guest')).roomNo, 
             guest_email:JSON.parse(localStorage.getItem('guest')).email, 
             request_from:JSON.parse(localStorage.getItem('guest')).name, 
             service_id: id, 
             status : SERVICE_STATUS.REQUESTED
        }
        console.log(obj);
        createServiceReq(obj);    
        resetRequest();
    }

    return(
        <div>
            <GuestPortalHeader />
            <div >
                <h2 className='h1center'> Current Booking Details</h2>
                <Form style={{marginLeft:'5%'}}>
                    <FormGroup  row>
                        <Label id="roomnumber" md={2}><b>Room No.</b></Label>
                        <Col md={1}>
                            <Input disabled value={getRoom()}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row >
                        <Label id="guests" md={2}><b>No. of Guests</b></Label>
                        <Col md={1}>
                            <Input disabled value={getCount()}/>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
            <br/>
            <div style={{marginLeft:'5%'}}>
                <Form >
                    <FormGroup row >
                        <Label  md={2}><b>Need a Service?</b></Label>
                        <Col md={2}>
                            <select value={selected_service} onChange={handleService}>
                                <option selected>--select service--</option>
                                {Object.values(SERVICES).map(displaydata => (
                                    <option >{displaydata}</option>
                                ))}
                            </select>
                        </Col>
                        <Col>
                            <Button size='m' variant='primary' disabled={!selected_service} onClick={onService} >Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
                <Form >
                    <FormGroup  row>
                        <Label md={2}><b>Have a Complaint?</b></Label>
                        <Col md={5} >
                            <Input rows="2" type="textarea" value={complaint} placeholder="type your complaint here" onChange={handleComplaint}/>
                        </Col>
                        <Col>
                            <Button size='m' variant='primary' disabled={!complaint} onClick = {onComplaint}>Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
                {/* {complaintSubmit && <Modal /> } */}
                <Link to='/guest/contact'>
                    Contact Helpline?
                </Link>
            </div>
            <button onClick={logout} class="button logout__submit">
    <span class="button__text">Log Out</span>
    
    </button> 
           
        </div>
    );
}

export default Guest;