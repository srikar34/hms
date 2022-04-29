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
    console.log(staffEmail);
    const staffCollectionRef = collection(db, "staff");
    const ff = (doc) => {
        return doc.data().email_id == staffEmail
    }
    // const [staffName, setStaffName] = useState(null);
    // const [user, setUser] = useState(null);
    useEffect(()=>{
        const getUser = async ()=>{
            const data  = await getDocs(staffCollectionRef);
            // data.docs.map((doc) => {console.log(doc.data())});
            const temp = data.docs.filter(ff)[0].data();
            
            console.log(temp);
            localStorage.setItem('staff',JSON.stringify({
                name : temp.name,
                email : temp.email,
                division : temp.division,
                empId : temp.emp_id
            }));
            // setUser(temp);
            // console.log("user = ");
            // console.log(user.name);
            // const temp1 = user.name;
            // setManagerName(temp1);
        };
        getUser();
    },[]);
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
                    <Navbar.Brand href="#home">Hello {getStaff()}</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/staff/profile">Profile</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        );
    }

export default StaffPortalHeader;