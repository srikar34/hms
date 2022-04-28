import React, { useState, useEffect } from 'react';
import '../App.css';
import {Table } from 'react-bootstrap';
import ManagerPortalHeader from './managerPortalHeader';
import {db} from '../firebase-config';
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";

function Rar(){
        const [ratings,setRatings]=useState([]);
        const ratingsCollectionRef = collection(db, "ratings");
        useEffect(()=>{
            const getRatings = async () =>{
                const data = await getDocs(ratingsCollectionRef);
                console.log(data);
                setRatings(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
            };
            getRatings();
        },[]);
        return(
            <div>
                <ManagerPortalHeader />
                <br/>
                <h1>Ratings and Reviews</h1>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Guest Name</th>
                        <th>Room Number</th>
                        <th>Rating</th>
                        <th>Review</th>
                        <th>Reply from Hotel</th>
                        </tr>
                    </thead>
                    <tbody>
                    {ratings.map((rating) =>
                        (
                            // const status = rating.status;
                            <tr>
                            <th>{rating.name}</th>
                            <th>{rating.from_room}</th>
                            <th>{rating.rating}</th>
                            <th>{rating.review}</th>
                            <th>{rating.reply}</th>
                            </tr>
                    ))}
                    </tbody>
                </Table>
                <br/>
            </div>
        ); 
}

export default Rar;