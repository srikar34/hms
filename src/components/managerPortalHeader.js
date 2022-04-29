import { Component } from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { MANAGER } from '../assets/names';
import { managerEmail } from './managerLogin';
import { getDocs, addDoc, collection, query, where, onSnapshot } from "firebase/firestore";
import {db} from "../firebase-config";
import { useState } from 'react';
import React, { useEffect } from 'react'; 

function ManagerPortalHeader(){
//class ManagerPortalHeader extends Component {

    const usersCollectionRef = collection(db, "users");
    const ff = (doc) => {
        return doc.data().email_id == managerEmail
    }
    // const [managerName, setManagerName] = useState(null);
    // const [user, setUser] = useState(null);
    useEffect(()=>{
        const getUser = async ()=>{
            const data  = await getDocs(usersCollectionRef);
            // data.docs.map((doc) => {console.log(doc.data())});
            const temp = data.docs.filter(ff)[0].data();
            localStorage.setItem('manager',JSON.stringify({
                name : temp.name,
                email : temp.email
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
    console.log(managerEmail);
    // console.log("user = ");
    // console.log(managerName);

    const getManager = () => {
        if(localStorage.getItem('manager')){
            return JSON.parse(localStorage.getItem('manager')).name;
        }
        else{
            return null;
        }
    }


    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/manager">Hello {getManager()}</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/manager/rooms">Rooms</Nav.Link>
                    <Nav.Link href="/manager/services">Services</Nav.Link>
                    <Nav.Link href="/manager/complaints">Complaints</Nav.Link>
                    <Nav.Link href="/manager/rar">Ratings and Reviews</Nav.Link>
                    <Nav.Link href="/manager/profile">Profile</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default ManagerPortalHeader;