import { FormGroup,Label,Col,Input } from "reactstrap";
import { Component } from "react";
import ReactStars from "react-rating-stars-component";
import { Button } from 'react-bootstrap';
import GuestPortalHeader from "./guestPortalHeader";
import { getDocs, addDoc, collection, query, where, onSnapshot } from "firebase/firestore";
import {db} from "../firebase-config";
import { useState } from 'react';
import '../App.css';

function GuestRar () {
//class GuestRar extends Component {
    const [feedback, setFeedback] = useState("");
    const [rating, ratingChanged] = useState(null);
    const handleFeedback = (e) => {
        setFeedback(e.target.value);    
    }
    const reset = () => {
        setFeedback("");
        ratingChanged(null);
    }
    const ratingChange = (newRating) => {
        console.log(newRating);
        ratingChanged(newRating);
    };

    const ratingsCollectionRef = collection(db, "ratings");
    const createRating = () => {
        const obj = {from_email: JSON.parse(localStorage.getItem('guest')).email,
               from_room: JSON.parse(localStorage.getItem('guest')).roomNo,
               name: JSON.parse(localStorage.getItem('guest')).name,
               rating: rating,
               review: feedback
            }
        console.log(obj);
        createRatingRecord(obj);
        reset();
        window.alert('Rating and Review submitted successfully');
        window.location.reload();
    }
    const createRatingRecord = async (record) => {
        await addDoc(ratingsCollectionRef, record);
    }

    return(
        <div >
            <GuestPortalHeader />
            <div style={{marginLeft:50}}>
                <h3>Send us Your feedback</h3>
                <ReactStars size={30} isHalf='true' onChange={ratingChange}/>
                <br/>
                <div className="row row-content">
                    <div className="col-12 col-md-9">
                        <FormGroup row>
                            <Label md={2}><b>Your Feedback</b></Label>
                            <Col md={10}>
                                <Input value = {feedback} type="textarea" rows="6" placeholder="type your feedback here" onChange = {handleFeedback}/>
                            </Col>
                        </FormGroup> 
                        <Button size='m' variant='primary' className="floatright" disabled={!feedback || !rating} onClick = {createRating} >submit</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GuestRar;