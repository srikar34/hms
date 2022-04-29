import React, { Component, useEffect } from 'react'; 
import { Button } from 'react-bootstrap';
import GuestPortalHeader from './guestPortalHeader';
import { useNavigate } from "react-router-dom";
import { Link, Navigate } from 'react-router-dom';
import { Form, FormGroup, Col, Label, Input} from 'reactstrap';
import { COMPLAINT_STATUS, SERVICES, SERVICE_STATUS } from '../assets/statusValues';
import { async } from '@firebase/util';
import { getDocs, addDoc, collection, query, where, onSnapshot } from "firebase/firestore";
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
  import { getAuth, updatePassword } from "firebase/auth";


function GuestProfile () {
    const navigate = useNavigate();
    const [changePassword,setChangePassword] = useState(false);
    const [newPassword, setNewPassword] = useState(null);
    const Auth = getAuth();
    const user = Auth.currentUser;

    const getName = () => {
        if(localStorage.getItem('guest')){
            console.log("name = " + JSON.parse(localStorage.getItem('guest')).name)
            return JSON.parse(localStorage.getItem('guest')).name;
        }
        else{
            return null;
        }
    }

    const getEmail = () => {
        if(localStorage.getItem('guest')){  
            console.log("email = " + JSON.parse(localStorage.getItem('guest')).email);

            return JSON.parse(localStorage.getItem('guest')).email;
        }
        else{
            return null;
        }
    }

    const logout = async () => {
        await signOut(auth);
         navigate('/');
    };

        return(
            <div>
                <GuestPortalHeader/>
                <h1 className='h1center'>
                    Your Profile
                </h1>
                {/* <div className='center'>
                    <div>
                        <Button size='m' variant='outline-dark' >Save</Button>
                        <Button size='m' variant='outline-dark' >Edit</Button>
                    </div>
                </div> */}
                <Form style={{marginLeft:'5%'}}>
                    <FormGroup  row>
                        <Label id="Full Name" md={2}><b>Full Name</b></Label>
                        <Col md={1}>
                            <Input disabled value={getName()}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row >
                        <Label id="email" md={2}><b>Email ID</b></Label>
                        <Col md={3}>
                            <Input disabled value={getEmail()}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row >
                        <Col>
                            <Button disabled={changePassword} onClick={() => setChangePassword(true)}>Change Password</Button>
                        </Col>

                        <Col>
                            <Input onChange={(e) => setNewPassword(e.target.value)} hidden={!changePassword} disabled={!changePassword} value={newPassword} placeholder="enter new password"/>
                        </Col>

                        <Col>
                            <Button hidden={!changePassword}  disabled={!newPassword} onClick={() => updatePassword(user,newPassword)}>Update Password</Button>
                        </Col>
                    </FormGroup>
                </Form>

            <button onClick={logout} class="button logout__submit">
            <span class="button__text">Log Out</span>        
            </button> 
            </div>
        );
}

export default GuestProfile;