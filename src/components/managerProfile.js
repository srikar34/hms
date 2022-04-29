import React, { Component, useEffect } from 'react'; 
import { Button } from 'react-bootstrap';
import ManagerPortalHeader from './managerPortalHeader';
import { useNavigate } from "react-router-dom";
import { Link, Navigate } from 'react-router-dom';
import { Form, FormGroup, Col, Label, Input} from 'reactstrap';
import { COMPLAINT_STATUS, SERVICES, SERVICE_STATUS } from '../assets/statusValues';
import { async } from '@firebase/util';
import { getDocs, addDoc, collection, query, where, onSnapshot } from "firebase/firestore";
import {db} from "../firebase-config";
import { GUEST } from '../assets/guestDetails';
import { useState } from 'react';
import { managerEmail,userEmail } from './login';
import { auth } from "../firebase-config";
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";

function ManagerProfile () {
    const navigate = useNavigate();

    const getName = () => {
        if(localStorage.getItem('manager')){
            console.log("name = " + JSON.parse(localStorage.getItem('manager')).name)
            return JSON.parse(localStorage.getItem('manager')).name;
        }
        else{
            return null;
        }
    }

    const getEmail = () => {
        if(localStorage.getItem('manager')){  
            console.log("email = " + JSON.parse(localStorage.getItem('manager')).email);

            return JSON.parse(localStorage.getItem('manager')).email;
        }
        else{
            return null;
        }
    }
    const getEmpID = () => {
        if(localStorage.getItem('manager')){
            console.log("EMP ID = " + JSON.parse(localStorage.getItem('manager')).emp_id)
            return JSON.parse(localStorage.getItem('manager')).emp_id;
        }
        else{
            return null;
        }
    }

    const getPhNo = () => {
        if(localStorage.getItem('manager')){  
            console.log("Phone no = " + JSON.parse(localStorage.getItem('manager')).ph_no);

            return JSON.parse(localStorage.getItem('manager')).ph_no;
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
                <ManagerPortalHeader/>
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
                        <Col md={2}>
                            <Input disabled value={getName()}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row >
                        <Label id="email" md={2}><b>Email ID</b></Label>
                        <Col md={4}>
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
                        <Label id="Phone no" md={2}><b>Phone Number</b></Label>
                        <Col md={3}>
                            <Input disabled value={getPhNo()}/>
                        </Col>
                    </FormGroup>
                </Form>
            <button onClick={logout} class="button logout__submit">
            <span class="button__text">Log Out</span>        
            </button> 
            </div>
        );
}

export default ManagerProfile;