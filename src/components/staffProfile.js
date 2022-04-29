import React, { Component, useEffect } from 'react'; 
import { Button } from 'react-bootstrap';
import StaffPortalHeader from './staffPortalHeader';
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

function StaffProfile () {
    const navigate = useNavigate();
    const getName = () => {
        if(localStorage.getItem('staff')){
            console.log("name = " + JSON.parse(localStorage.getItem('staff')).name)
            return JSON.parse(localStorage.getItem('staff')).name;
        }
        else{
            return null;
        }
    }

    const getEmail = () => {
        if(localStorage.getItem('staff')){  
            console.log("email = " + JSON.parse(localStorage.getItem('staff')).email);

            return JSON.parse(localStorage.getItem('staff')).email;
        }
        else{
            return null;
        }
    }

    const getEmpID = () => {
        if(localStorage.getItem('staff')){
            console.log("EMP ID = " + JSON.parse(localStorage.getItem('staff')).empId)
            return JSON.parse(localStorage.getItem('staff')).empId;
        }
        else{
            return null;
        }
    }

    const getDivision = () => {
        if(localStorage.getItem('staff')){  
            console.log("division = " + JSON.parse(localStorage.getItem('staff')).division);

            return JSON.parse(localStorage.getItem('staff')).division;
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
                <StaffPortalHeader/>
                <h1 className='h1center'>
                    Your Profile
                </h1>
                {/* <div className='center'>
                    <div>
                        <Button size='m' variant='outline-primary' >Save</Button>
                        <Button size='m' variant='outline-primary' >Edit</Button>
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
                    <FormGroup  row>
                        <Label id="Emp ID" md={2}><b>Employee ID</b></Label>
                        <Col md={1}>
                            <Input disabled value={getEmpID()}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row >
                        <Label id="Division" md={2}><b>Division</b></Label>
                        <Col md={3}>
                            <Input disabled value={getDivision()}/>
                        </Col>
                    </FormGroup>
                </Form>

            <button onClick={logout} class="button logout__submit">
            <span class="button__text">Log Out</span>        
            </button> 
           
        </div>
        );
}

export default StaffProfile;