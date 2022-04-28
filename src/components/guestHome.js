import React, { Component, useEffect } from 'react'; 
import GuestPortalHeader from './guestPortalHeader';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Col, Label, Input} from 'reactstrap';
import { SERVICES } from '../assets/statusValues';
import { async } from '@firebase/util';
import { getDocs, addDoc, collection, query, where, onSnapshot } from "firebase/firestore";
import {db} from "../firebase-config";
import { GUEST } from '../assets/guestDetails';
import { useState } from 'react';
import { guestEmail } from './login';

function Guest() {
    const [selected_service,setSelectedService] = useState(null);
    const [complaint,setComplaint] = useState(null);

    var maxServiceId = 3;
    var maxComplaintId = 3;
    const usersCollectionRef = collection(db, "users");
    const servicerecordCollectionRef = collection(db, "servicerecord");
    const complaintrecordCollectionRef = collection(db, "complaintrecord");

    // const events = db.child('servicerecord');
    // const query = events
    //                 .orderByChild('email_id')
    //                 .equalTo(GUEST.EMAIL_ID);
    console.log(guestEmail);
    // console.log(query);
    // const getUser = async () => {
    //     const q = await query(usersCollectionRef,where("email_id", "==", GUEST.EMAIL_ID));
    //     // const q = await usersCollectionRef.where("email_id", "==", GUEST.EMAIL_ID).get();
    //     if(q.docs){
    //         console.log(q.docs);
    //     }
        
        // console.log("ff");
        // q.docs.map((doc) => {
        // GUEST.NAME = doc.name;
        // GUEST.GENDER = doc.gender;
        // GUEST.NO_OF_GUESTS = doc.no_of_guest;
        // GUEST.ROOM_NO = doc.room_number;
        // console.log(GUEST);
    // });
    // }
    // getUser();
    
    
    // console.log(q.docs);
    // q.docs.map((doc) => {
    //     GUEST.NAME = doc.name;
    //     GUEST.GENDER = doc.gender;
    //     GUEST.NO_OF_GUESTS = doc.no_of_guest;
    //     GUEST.ROOM_NO = doc.room_number;
    // });

    // console.log(GUEST);
    const ff = (doc) => {
        return doc.data().email_id == guestEmail
    }

    const [user, setUser] = useState(null);
    useEffect(()=>{
        const getUser = async ()=>{
            const data  = await getDocs(usersCollectionRef);
            data.docs.map((doc) => {console.log(doc.data())});
            const user = data.docs.filter(ff)[0].data();
            setUser(user);
            GUEST.NAME = user.name;
            GUEST.GENDER = user.gender;
            GUEST.NO_OF_GUESTS = user.no_of_guests;
            GUEST.ROOM_NO = user.room_number;
        };
        getUser();
    },[]);
    console.log(user);

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

    const createServiceReq = async() => {
        await addDoc(servicerecordCollectionRef, {description:selected_service, from_room:GUEST.ROOM_NO, guest_email:GUEST.EMAIL_ID, request_from:GUEST.NAME, service_id:++maxServiceId, status:"Requested"});
    }
    const createComplaintReq = async() => {
        await addDoc(complaintrecordCollectionRef, {complaint_id:maxComplaintId, description:complaint, from_email:GUEST.EMAIL_ID, from_room:GUEST.ROOM_NO, reply:"", status:"Active"});
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
                            <Input disabled value={GUEST.ROOM_NO}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row >
                        <Label id="guests" md={2}><b>No. of Guests</b></Label>
                        <Col md={1}>
                            <Input disabled value={GUEST.NO_OF_GUESTS}/>
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
                            <Button size='m' variant='primary' disabled={!selected_service} onClick={createServiceReq} >Submit</Button>
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
                            <Button size='m' variant='primary' disabled={!complaint} onClick = {createComplaintReq}>Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
                <Link to='/guest/contact'>
                    Contact Helpline?
                </Link>
            </div>
        </div>
    );
}

// class Guest extends Component {

//     constructor(props){
//         super(props);
//         this.serviceMaxid = 3;
//         this.servicerecordCollectionRef = collection(db, "servicerecord");
//         this.createServiceReq = this.createServiceReq.bind(this);
//         console.log(GUEST.EMAIL_ID);
//         this.guest_record = query(this.servicerecordCollectionRef, where("email_id","==","chandrakanth@gmail.com")).get();
//         if(this.guest_record.empty){
//             console.log("ff");
//         }
//         else{
//             this.querySnapshot = getDocs(this.guest_record);
//         this.querySnapshot = this.querySnapshot.map(snap => snap.data());
//         this.querySnapshot.forEach((doc) => {
//             // doc.data() is never undefined for query doc snapshots
//             console.log(doc.id, " => ", doc.data());
//         });
//         }
        
//         GUEST.NAME = this.guest_record.name;
//         GUEST.GENDER = this.guest_record.gender;
//         GUEST.ROOM_NO = this.guest_record.room_number;
//         GUEST.NO_OF_GUESTS = this.guest_record.no_of_guests;
        
//         console.log(GUEST.NAME+" "+GUEST.GENDER+" "+GUEST.ROOM_NO+" ff "+GUEST.NO_OF_GUESTS);
//         this.state = {
//             selected_service : null,
//             complaint : null,
//         };
        
//         this.handleComplaint = this.handleComplaint.bind(this);
//         this.handleService  = this.handleService.bind(this);
//     }
//     createServiceReq = async() => {
//         await addDoc(this.servicerecordCollectionRef, {description:this.state.selected_service, from_room:GUEST.ROOM_NO, guest_email:GUEST.EMAIL_ID, request_from:GUEST.NAME, service_id:++this.serviceMaxid, status:"requested"});
//     }
//     handleComplaint(e){
//         this.setState({
//             complaint : e.target.value
//         });
//     }

//     handleService(e){
//         console.log(e.target.value);
//         if(e.target.value==="--select service--"){
//             this.setState({
//                 selected_service : null
//             });
//         }
//         else{
//             this.setState({
//                 selected_service : e.target.value
//             });
//         }   
//     }

//     render(){
//         return(
//             <div>
//                 <GuestPortalHeader />
//                 <div >
//                     <h2 className='h1center'> Current Booking Details</h2>
//                     <Form style={{marginLeft:'5%'}}>
//                         <FormGroup  row>
//                             <Label id="roomnumber" md={2}><b>Room No.</b></Label>
//                             <Col md={1}>
//                                 <Input disabled value={GUEST.ROOM_NO}/>
//                             </Col>
//                         </FormGroup>
//                         <FormGroup row >
//                             <Label id="guests" md={2}><b>No. of Guests</b></Label>
//                             <Col md={1}>
//                                 <Input disabled value={GUEST.NO_OF_GUESTS}/>
//                             </Col>
//                         </FormGroup>
//                     </Form>
//                 </div>
//                 <br/>
//                 <div style={{marginLeft:'5%'}}>
//                     <Form >
//                         <FormGroup row >
//                             <Label  md={2}><b>Need a Service?</b></Label>
//                             <Col md={2}>
//                                 <select value={this.state.selected_service} onChange={this.handleService}>
//                                     <option selected>--select service--</option>
//                                     {Object.values(SERVICES).map(displaydata => (
//                                         <option >{displaydata}</option>
//                                     ))}
//                                 </select>
//                             </Col>
//                             <Col>
//                                 <Button size='m' variant='primary' disabled={!this.state.selected_service} onClick={this.createServiceReq}>Submit</Button>
//                             </Col>
//                         </FormGroup>
//                     </Form>
//                     <Form >
//                         <FormGroup  row>
//                             <Label md={2}><b>Have a Complaint?</b></Label>
//                             <Col md={5} >
//                                 <Input rows="2" type="textarea" value={this.state.complaint} placeholder="type your complaint here" onChange={this.handleComplaint}/>
//                             </Col>
//                             <Col>
//                                 <Button size='m' variant='primary' disabled={!this.state.complaint}>Submit</Button>
//                             </Col>
//                         </FormGroup>
//                     </Form>
//                     <Link to='/guest/contact'>
//                         Contact Helpline?
//                     </Link>
           
//                 </div>
//             </div>
//         );
//     }
// }

export default Guest;