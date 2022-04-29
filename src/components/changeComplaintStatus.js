import React from 'react'
import { useState, useEffect } from "react";
import '../App.css';
import { db } from "../firebase-config";
import { COMPLAINT_STATUS, SERVICES, SERVICE_STATUS } from '../assets/statusValues';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

export default function ChangeComplaintStatus() {
    const navigate = useNavigate();
    const complaintsCollectionRef = collection(db, "complaintrecord");
    const [complaints, setComplaints] = useState(null);
    const [idEntered,setId] = useState(null);

    const HandleId = (e) =>{
        setId(e.target.value);
    }
    const ff = (doc) => {
        return doc.data().complaint_id === Number(idEntered) && doc.data().status === COMPLAINT_STATUS.ACTIVE;
    }
    useEffect(() => {
        const getComplaints = async () => {
          const data = await getDocs(complaintsCollectionRef);
         const complainttemp = data.docs.filter(ff)[0];
            console.log(complainttemp);
          setComplaints({ ...complainttemp.data(), id: complainttemp.id });
          console.log(complaints);
          console.log(complainttemp.data());
        }
          getComplaints();
        },[idEntered]);

    const updateComplaintRecord = async () => {
        console.log(complaints.id);
        const Doc = doc(db,"complaintrecord",complaints.id);
        console.log(complaints.id);
        const newfields = {status : COMPLAINT_STATUS.CLOSED};
        await updateDoc(Doc, newfields);
        window.location.reload();
      }

  return (
    <div>
    <div>
    <input value={idEntered} type="text" class="login__input" placeholder="Complaint ID" onChange={HandleId}/>
    <button onClick={updateComplaintRecord} class="button logout__submit2">
    <span class="button__text">Enter</span>
    </button>
    </div>
    </div>
  );
}
