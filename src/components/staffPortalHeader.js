import { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { STAFF } from '../assets/names';
import { staffEmail } from './staffLogin';
import { getDocs, addDoc, collection, query, where, onSnapshot } from "firebase/firestore";
import {db} from "../firebase-config";
import { useState } from 'react';
import React, { useEffect } from 'react'; 

function StaffPortalHeader() {
//class StaffPortalHeader extends Component {
    
    // console.log(user);
    // console.log(staffEmail);
    // console.log("user = ");
    const getStaff = () => {
        if(localStorage.getItem('staff')){
            // console.log("room no = " + JSON.parse(localStorage.getItem('guest')).roomNo)
            return JSON.parse(localStorage.getItem('staff')).name;
        }
        else{
            return null;
        }
    }
    // console.log(staffName);
        return(
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/staff">Hello {getStaff()}</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/staff/profile">Profile</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        );
    }

export default StaffPortalHeader;