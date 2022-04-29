import React, { Component } from 'react'; 
import { Button } from 'react-bootstrap';
import StaffPortalHeader from './staffPortalHeader';
import { Form,FormGroup,Label,Col,Input } from "reactstrap";
import { SERVICES, SERVICE_STATUS } from '../assets/statusValues';
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

  
function Staff() {
    const navigate = useNavigate();

    // const [selected_service,setSelectedService] = useState(null);
    // const [complaint,setComplaint] = useState(null);
    // // const [guestDetails, setGuestDetails] = useState(getGuestDetails());
    // var maxServiceId = 3;
    // var maxComplaintId = 3;
    // const usersCollectionRef = collection(db, "users");
    // const servicerecordCollectionRef = collection(db, "servicerecord");
  //  const complaintrecordCollectionRef = collection(db, "complaintrecord");

    
    const logout = async () => {
        await signOut(auth);
         navigate('/');
      };

   
    // const ff = (doc) => {
    //     return doc.data().email_id == guestEmail
    // }

    // const [user, setUser] = useState(null);
    // useEffect(()=>{
    //     // localStorage.setItem('guest',JSON.stringify(guestDetails));
    //     const getUser = async ()=>{
    //         const data  = await getDocs(usersCollectionRef);
    //         const user = data.docs.filter(ff)[0].data();
    //         localStorage.setItem('guest',JSON.stringify({
    //             name : user.name,
    //             noOfGuests : user.no_of_guests,
    //             roomNo : user.room_number,
    //             email : user.email
    //         }));
    //         console.log(localStorage.getItem('guest'));
    //         // data.docs.map((doc) => {console.log(doc.data())});
    //         // const user = data.docs.filter(ff)[0].data();
    //         // setUser(user);
    //         // GUEST.NAME = user.name;
    //         // GUEST.GENDER = user.gender;
    //         // GUEST.NO_OF_GUESTS = user.no_of_guests;
    //         // GUEST.ROOM_NO = user.room_number;
    //     };
    //     getUser();

    // },[]);


    // const handleService = (e) => {
    //     if(e.target.value==="--select service--"){
    //         setSelectedService(null);
    //     }
    //     else{
    //         setSelectedService(e.target.value);
    //     }
    // }

    // const handleComplaint = (e) => {
    //     setComplaint(e.target.value);
    // }

    // const getRoom = () => {
    //     if(localStorage.getItem('guest')){
    //         console.log("room no = " + JSON.parse(localStorage.getItem('guest')).roomNo)
    //         return JSON.parse(localStorage.getItem('guest')).roomNo;
    //     }
    //     else{
    //         return null;
    //     }
    // }

    // const getCount = () => {
    //     if(localStorage.getItem('guest')){  
    //         console.log("count = " + JSON.parse(localStorage.getItem('guest')).noOfGuests);

    //         return JSON.parse(localStorage.getItem('guest')).noOfGuests;
    //     }
    //     else{
    //         return null;
    //     }
    // }
    // if(snapshot.empty){
    //     console.log('No matching documents');
    //     return;
    // }
    // snapshot.forEach(doc => {
    //     console.log(doc.id, '=>', doc.data());
    // });
    // onSnapshot(q, (snapshot) => {
    //     let books = []
    //     snapshot.docs.forEach((doc) =>{
    //         books.push({ ...doc.data(), id: doc.id})
    //     })
    //     console.log(books)
    // })

    // const createServiceReq = async() => {
    //     await addDoc(servicerecordCollectionRef, {description:selected_service, from_room:GUEST.ROOM_NO, guest_email:GUEST.EMAIL_ID, request_from:GUEST.NAME, service_id:++maxServiceId, status:"Requested"});
    // }
    // const createComplaintReq = async() => {
    //     await addDoc(complaintrecordCollectionRef, {complaint_id:maxComplaintId, description:complaint, from_email:GUEST.EMAIL_ID, from_room:GUEST.ROOM_NO, reply:"", status:"Active"});
    // }

    return(
        <div>
            <StaffPortalHeader />
            <button onClick={logout} class="button logout__submit">
    <span class="button__text">Log Out</span>
    
    </button> 
           
        </div>
    );
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
//                     <div>
//                         <div >
//                         <h2 className='h1center'> Current Work Assigned</h2>
//                         <Form style={{marginLeft:'5%'}}>
//                             <FormGroup  row>
//                                 <Label id="roomnumber" md={2}><b>Room No.</b></Label>
//                                 <Col md={1}>
//                                     <Input disabled value={this.state.roomno}/>
//                                 </Col>
//                             </FormGroup>
//                             <FormGroup row >
//                                 <Label md={2}><b>Service</b></Label>
//                                 <Col md={1}>
//                                     <Input disabled value={this.state.service}/>
//                                 </Col>
//                             </FormGroup>
//                         </Form>
//                     </div>
//                     <div style={{marginLeft:'5%'}}>
//                         <Form >
//                             <FormGroup row >
//                                 <Label  md={2}><b>Update Status</b></Label>
//                                 <Col md={2}>
//                                     <select disabled={!this.state.roomno} value={this.state.selected_status} onChange={this.handleStatus}>
//                                         <option>--select status--</option>
//                                         {Object.values(SERVICE_STATUS).map(displaydata => (
//                                             <option >{displaydata}</option>
//                                         ))}
//                                     </select>
//                                 </Col>
//                                 <Col>
//                                     <Button size='m' variant='primary' disabled={!this.state.selected_status}>Submit</Button>
//                                 </Col>
//                             </FormGroup>
//                             <FormGroup row>
//                                 <Label  md={2}><b>Add Bill</b></Label>
//                                 <Col  md={2}>
//                                     <Input value={this.state.bill} type="number" placeholder="Enter Bill Here" onChange={this.handleBill}/>
//                                 </Col>
//                                 <Col>
//                                     <Button size='m' variant='primary' disabled={!this.state.bill}>Submit</Button>
//                                 </Col>
//                             </FormGroup>
//                         </Form>
//                     </div>
                    
//                     </div>
//                 </div>
//             );
//         // }
//     }
// }

// export default Staff;