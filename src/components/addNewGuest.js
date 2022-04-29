import React, { Component } from 'react';
import '../App.css';
// import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { FormGroup,Label,Col,Input,Form } from "reactstrap";
import ManagerPortalHeader from './managerPortalHeader';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";

function Rooms(){
//class Rooms extends Component {
    const [name,setName] = useState(null);
    const [email,setEmail] = useState(null);
    const [roomNo,setRoomNo] = useState(null);
    const [noOfGuests,setGuests] = useState(null);
    const [bill,setBill] = useState(null);
    const [noOfDays,setDays] = useState(null);
    // const [registerEmail, setRegisterEmail] = useState("");
    // const [registerPassword, setRegisterPassword] = useState("");

    const usersCollectionRef = collection(db, "users");
    const roomsCollectionRef = collection(db, "roomrecord");
    const billCollectionRef = collection(db,"billrecord");
    const createNewGuest = async() => {
        await addDoc(usersCollectionRef, {email_id: email, name:name, no_of_guests:noOfGuests, room_number:Number(roomNo)});
    }
    const createNewRoomRecord = async() => {
        await addDoc(roomsCollectionRef, {email_id: email, name:name, num_guests:noOfGuests, room_number:Number(roomNo), status:"Occupied"});
    }
    const createNewBillRecord = async() => {
        await addDoc(billCollectionRef, {room_number : Number(roomNo) , due : Number(bill)});
    }
    const addNewGuest = () => {

        register();
        createNewGuest();
        createNewRoomRecord();
        createNewBillRecord();
    }

    const register = async () => {
        const pwd = "12345678";
        try {
          const user = await createUserWithEmailAndPassword(
            auth,
            email,
            pwd
          );
          console.log(user);
        } catch (error) {
          console.log(error.message);
        }
      };


        return(
            <div>
                <ManagerPortalHeader />
                <div className="row row-content"     style={{marginLeft:'auto'}}>
                    <h1 className='divcenter'>Assign Room to Guest</h1>
                        <div className="col-12 col-md-9">
                            <Form>
                                <FormGroup row>
                                    <Label id="guestname" md={2}><b>Guest Name</b></Label>
                                        <Col md={7}>
                                            <Input value={name} type="text" placeholder="enter name" onChange={(e) => {setName(e.target.value)}}/>
                                        </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label id="email" md={2}><b>Guest Email</b></Label>
                                        <Col md={7}>
                                            <Input value={email} type="text" placeholder="enter email-id" onChange={(e) => {setEmail(e.target.value)}}/>
                                        </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label id="noOfGuests" md={2}><b>Number of Guests</b></Label>
                                        <Col md={7}>
                                            <Input value = {noOfGuests} type="text" placeholder="enter no.of Guests" onChange={(e) => {setGuests(e.target.value)}}/>
                                        </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label id="roomno" md={2}><b>Room No.</b></Label>
                                        <Col md={7}>
                                            <Input value = {roomNo} type="text" placeholder="enter room number" onChange={(e) => {setRoomNo(e.target.value)}}/>
                                        </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label id="daysofstay" md={2}><b>Reservation for</b></Label>
                                        <Col md={7}>
                                            <Input value={noOfDays} type="text" placeholder="enter number of days" onChange={(e) => {setDays(e.target.value)}}/>
                                        </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label id="billforstay" md={2}><b>Bill for Stay</b></Label>
                                        <Col md={7}>
                                            <Input value={bill} type="text" placeholder="enter amount" onChange={(e) => {setBill(e.target.value)}}/>
                                        </Col>
                                </FormGroup>
                            </Form>
                            <Button size='m' variant='primary' className="floatright" onClick = {addNewGuest} disabled={!name||!email||(!noOfGuests)||(!noOfDays)||(!roomNo)||(!bill)} >Assign Room</Button>
                        </div>
                    </div>
            </div>
        ); 
//}
}
// &&(!noOfGuests)&&(!noOfDays)&&(!roomNo)&&(!bill)
export default Rooms;