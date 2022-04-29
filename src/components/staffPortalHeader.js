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
    const usersCollectionRef = collection(db, "users");
    const ff = (doc) => {
        return doc.data().email_id == staffEmail
    }
    const [staffName, setStaffName] = useState(null);
    const [user, setUser] = useState(null);
    useEffect(()=>{
        const getUser = async ()=>{
            const data  = await getDocs(usersCollectionRef);
            data.docs.map((doc) => {console.log(doc.data())});
            const temp = data.docs.filter(ff)[0].data();
            setUser(temp);
            console.log("user = ");
            console.log(user.name);
            const temp1 = user.name;
            setStaffName(temp1);
        };
        getUser();
    },[]);
    // console.log(user);
    // console.log(staffEmail);
    // console.log("user = ");
    console.log(staffName);
        return(
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Hello {staffName}</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/staff/profile">Profile</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        );
    }

export default StaffPortalHeader;