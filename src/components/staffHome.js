import React, { Component } from 'react'; 
import { Button } from 'react-bootstrap';
import StaffPortalHeader from './staffPortalHeader';
import { Form,FormGroup,Label,Col,Input } from "reactstrap";
import { SERVICES, STAFF_SERVICE_STATUS, SERVICE_STATUS, STAFF_STATUS } from '../assets/statusValues';
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";
import {db} from "../firebase-config";
import { getDocs, doc, addDoc, collection, query, where, onSnapshot, updateDoc } from "firebase/firestore";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { staffEmail } from './staffLogin';

function Staff() {
    const navigate = useNavigate();
    
    const [Assignments,setAssignmets] = useState(null);
    const [work,setWork] = useState(false);
    const [selectedStatus,setSelectedStatus] = useState(null);
    const [bill,setBill] = useState(null);
    const [dues,setDues] = useState(null);

  console.log(staffEmail);
  const servicerecordCollectionRef = collection(db, "servicerecord");
  const staffCollectionRef = collection(db, "staff");
  const billCollectionRef = collection(db, "billrecord");

  const ff = (doc) => {
      return doc.data().email_id === JSON.parse(localStorage.getItem('staff')).email
  }

  const filt = (doc) => {

    if(doc.data().staff){
      // console.log(doc.data().staff);
      // console.log(JSON.parse(localStorage.getItem('staff')).name);

        if( doc.data().staff === JSON.parse(localStorage.getItem('staff')).name && doc.data().status === SERVICE_STATUS.ASSIGNED){
          console.log("retunrning true");
          return true;
        }
        else{
          return false;
        }
    }
    return false;
    
}

  const roomFilter = (doc) => {
    console.log(doc.data().room_number);
    console.log(Assignments.from_room);
    return doc.data().room_number === Assignments.from_room
  }

  useEffect(()=>{
        const getUser = async ()=>{
            const data  = await getDocs(staffCollectionRef);
            
            const temp = {...data.docs.filter(ff)[0].data(),id : data.docs.filter(ff)[0].id};
            console.log(temp);
            localStorage.setItem('staff',JSON.stringify({
                name : temp.name,
                email : temp.email_id,
                division : temp.division,
                empId : temp.emp_id,
                docId : temp.id
            }));
            console.log(JSON.parse(localStorage.getItem('staff')));
        };
        getUser();

        const getWork = async ()=>{
        console.log("inside getwork");
        const data  = await getDocs(servicerecordCollectionRef);
        // console.log(data.docs);
        const request = data.docs.filter(filt);
        console.log("request = ");
        console.log(request[0].data());
        // console.log(request[0].data());
          
        console.log(JSON.parse(localStorage.getItem('staff')));
        if(request.length > 0){
          console.log("inside if");
          console.log(request);
          
          setWork(true);
          setAssignmets({...request[0].data(),docId : request[0].id});
          console.log("assignmentr = ");
          console.log(Assignments);
        }

        console.log("inside getwork");
      }
      getWork();

      // const getBill = async () => {
      //   const data = await getDocs(billCollectionRef);
      //   console.log("fffffffffff");
      //   console.log(data.docs);
      //   const billRecord = data.docs.filter(roomFilter);
      //   console.log("bill record = ");
      //   console.log(billRecord);
      //   console.log(billRecord.length);
      //   if(billRecord.length > 0){
      //     console.log(billRecord[0].data());
      //     setDues({...billRecord[0].data(), docId : billRecord[0].id});
      //     console.log(dues);
      //   }
      // }
      // // console.log(dues);
      // getBill();

  },[]);

  // useEffect() 
    
  useEffect(() => {
    const getBill = async () => {
      const data = await getDocs(billCollectionRef);
      const billRecord = data.docs.filter(roomFilter);
      // console.log(billRecord[0].data());
      if(billRecord.length > 0){
        setDues({...billRecord[0].data(), docId : billRecord[0].id});
        console.log(dues);
      }
    }
    console.log(dues);
    getBill();
  },[bill]);

    const logout = async () => {
        await signOut(auth);
        localStorage.removeItem('staff');
         navigate('/');
      };

    const updateStatus = (e) => {
      console.log(e.target.value);
      if(e.target.value === "--select status--"){
        setSelectedStatus(null);
      }
      else{
        setSelectedStatus(e.target.value);
      }
    }

    const handleBill = (e) => {
      setBill(e.target.value);
    }

    const updateStaffRecord = async(status) => {
      const Doc = doc(db,"staff",JSON.parse(localStorage.getItem('staff')).docId);
      const newfields = {status : status};
      await updateDoc(Doc, newfields);
    }
    
    const updateServiceRecord = async (status) => {
      const Doc = doc(db,"servicerecord",Assignments.docId);
      const newfields = {status : status};
      await updateDoc(Doc, newfields);
    }

    const updateBillRecord = async () => {
      const Doc = doc(db,"billrecord",dues.docId);
      const newfields = {due : Number(bill) + Number(dues.due)};
      await updateDoc(Doc,newfields);
      // window.location.reload();
      // updateStaffRecord(STAFF_STATUS.AVAILABLE);
    }
    
    const handleSubmit = async () => {
      // console.log(e.target.value);
      // if(e.target.value)
      if(selectedStatus === STAFF_SERVICE_STATUS.COMPLETED){
        // updateStaffRecord(STAFF_STATUS.AVAILABLE);
        updateServiceRecord(selectedStatus);
        updateStaffRecord(STAFF_STATUS.AVAILABLE);
        updateBillRecord();

        const data = await getDocs(servicerecordCollectionRef);

        const pendingRequests = data.docs.filter((doc) => 
        doc.data().description === JSON.parse(localStorage.getItem('staff')).division
        && 
        doc.data().status === SERVICE_STATUS.REQUESTED )
        console.log("pending requests = ");
        console.log(pendingRequests);
        if(pendingRequests.length > 0){
          const idx = Math.floor(Math.random()*pendingRequests.length);
          const record = doc(db, "staff",JSON.parse(localStorage.getItem('staff')).docId);
          const newfields = {status : STAFF_STATUS.BUSY};
          await updateDoc(record,newfields);

          const servRecord = doc(db,"servicerecord",pendingRequests[idx].id);
          const newFields = {status : SERVICE_STATUS.ASSIGNED , staff : JSON.parse(localStorage.getItem('staff')).name};
          await updateDoc(servRecord,newFields);
        }


      }
      else{
        updateServiceRecord(selectedStatus);
      }
    }


    if(work){
      return(
        <div>
            <StaffPortalHeader />
            <div>
                <div >
                  <h2 className='h1center'> Current Work Assigned</h2>
                  <Form style={{marginLeft:'5%'}}>
                      <FormGroup  row>
                          <Label id="roomnumber" md={2}><b>Room No.</b></Label>
                          <Col md={1}>
                              <Input disabled value= {Assignments.from_room}/>
                          </Col>
                      </FormGroup>
                      <FormGroup row >
                          <Label md={2}><b>Service</b></Label>
                          <Col md={2}>
                              <Input disabled value={Assignments.description}/>
                          </Col>
                      </FormGroup>
                  </Form>
                </div>
                  <div style={{marginLeft:'5%'}}>
                    <Form >
                        <FormGroup row >
                            <Label  md={2}><b>Update Status</b></Label>
                            <Col md={2}>
                                <select value={selectedStatus} onChange={updateStatus}>
                                    <option>--select status--</option>
                                    {Object.values(STAFF_SERVICE_STATUS).map(displaydata => (
                                        <option >{displaydata}</option>
                                    ))}
                                </select>
                            </Col>
                            {/* <Col>
                                <Button size='m' variant='primary' disabled={!selectedStatus} onClick={handleStatusChange}>Submit</Button>
                            </Col> */}
                        </FormGroup>
                        <FormGroup row>
                            <Label  md={2}><b>Add Bill</b></Label>
                            <Col  md={2}>
                                <Input value={bill} type="number" placeholder="Enter Bill Here" onChange={handleBill}/>
                            </Col>
                            <Col>
                                <Button size='m' variant='primary' disabled={!bill || !selectedStatus} onClick={handleSubmit}>Submit and Update Status</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                  </div>
              </div>
            
              <button onClick={logout} class="button logout__submit">
                <span class="button__text">Log Out</span>
              </button> 
        </div>
    );
    }
    else{
      return(
        <div>
        <StaffPortalHeader />
        <h2>No work Assigned</h2>
        <button onClick={logout} class="button logout__submit">
                <span class="button__text">Log Out</span>
              </button> 
      </div>
      );
      
    }
    
}

export default Staff;

// class Staff extends Component {

//     constructor(props){
//         super(props);
//         this.state = {
//             roomno : "C212",
//             service : SERVICES.LAUNDRY,
//             selectd_status : null,
//             bill : null
//         };
//         this.handleStatus = this.handleStatus.bind(this);
//         this.handleBill = this.handleBill.bind(this);
//     }

//     handleStatus(e){
//         console.log(e.target.value);
//         if(e.target.value==="--select status--"){
//             this.setState({
//                 selected_status : null
//             });
//         }
//         else{
//             this.setState({
//                 selected_status : e.target.value
//             });
//         }  
//     }

//     handleBill(e){
//         this.setState({
//             bill : e.target.value
//         });
//     }

//     render(){
//         // if (JSON.parse(localStorage.getItem('validEmail')).valid){
//             return(
//                 <div>
//                     <StaffPortalHeader/>
                  //   <div>
                  //       <div >
                  //       <h2 className='h1center'> Current Work Assigned</h2>
                  //       <Form style={{marginLeft:'5%'}}>
                  //           <FormGroup  row>
                  //               <Label id="roomnumber" md={2}><b>Room No.</b></Label>
                  //               <Col md={1}>
                  //                   <Input disabled value="ff"/>
                  //               </Col>
                  //           </FormGroup>
                  //           <FormGroup row >
                  //               <Label md={2}><b>Service</b></Label>
                  //               <Col md={1}>
                  //                   <Input disabled value="ff"/>
                  //               </Col>
                  //           </FormGroup>
                  //       </Form>
                  //   </div>
                  //   <div style={{marginLeft:'5%'}}>
                  //       <Form >
                  //           <FormGroup row >
                  //               <Label  md={2}><b>Update Status</b></Label>
                  //               <Col md={2}>
                  //                   <select disabled='false' value='ff'>
                  //                       <option>--select status--</option>
                  //                       {Object.values(SERVICE_STATUS).map(displaydata => (
                  //                           <option >{displaydata}</option>
                  //                       ))}
                  //                   </select>
                  //               </Col>
                  //               <Col>
                  //                   <Button size='m' variant='primary' disabled='false'>Submit</Button>
                  //               </Col>
                  //           </FormGroup>
                  //           <FormGroup row>
                  //               <Label  md={2}><b>Add Bill</b></Label>
                  //               <Col  md={2}>
                  //                   <Input value="ff" type="number" placeholder="Enter Bill Here" onChange={this.handleBill}/>
                  //               </Col>
                  //               <Col>
                  //                   <Button size='m' variant='primary' disabled={!this.state.bill}>Submit</Button>
                  //               </Col>
                  //           </FormGroup>
                  //       </Form>
                  //   </div>
                    
                  //  </div>
//                 </div>
//             );
//         // }
//     }
// }

// export default Staff;