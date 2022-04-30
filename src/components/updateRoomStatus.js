import { Component, useState, useEffect } from "react";
import ManagerPortalHeader from "./managerPortalHeader";
import { FormGroup,Label,Col,Input,Form } from "reactstrap";
import { Button } from 'react-bootstrap';
import { ROOM_STATUS } from "../assets/statusValues";
import { db } from "../firebase-config";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";
  import { useNavigate } from 'react-router-dom';

function UpdateRoomStatus (){
//class UpdateRoomStatus extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         roomno : null,
    //         currentstatus : null,
    //         newstatus : "",
    //     }
    //     this.onClick = this.onClick.bind(this);
    //     this.handleRoomNoChange = this.handleRoomNoChange.bind(this);
    //     this.handleSelectedStatusChange = this.handleSelectedStatusChange.bind(this);
    //     this.reset = this.reset.bind(this);
    // }
    const roomsCollectionRef = collection(db, "roomrecord");
    const [roomno, setRoomno] = useState(null);
    const [currentstatus, setCurrentstatus] = useState(null);
    const [newstatus, setNewstatus] = useState("");
    const [roomrecord, setRoomrecord] = useState(null);

    const ff = (doc) => {
        return doc.data().room_number == roomno;
    }

    useEffect(() => {
        const getRoomrecord = async () => {
            const data = await getDocs(roomsCollectionRef);
            const roomtemp = data.docs.filter(ff)[0];
            console.log("ff");
            console.log(roomtemp);
            setRoomrecord({ ...roomtemp.data(), id: roomtemp.id });
            console.log("hhhh");
            console.log(roomrecord);
            console.log(roomtemp.data());
        }
        getRoomrecord();
    },[roomno]);

    const SettingCurrentstatus = () => {
        setCurrentstatus(roomrecord.status);
        // reset1();
    }

    const updateRoomRecord = async () => {
        const Doc = doc(db, "roomrecord", roomrecord.id);
        const newfields = {status: newstatus, email_id: null, name:null, no_of_guests:null};
        await updateDoc(Doc, newfields);
        // reset();
        window.location.reload();
    }

    const reset = () => {
        setRoomno(null);
        setCurrentstatus(null);
        setNewstatus("");
    }
    // const reset1 = () => {
    //     setNewstatus("");
    // }

    const HandleRoomNoChange = (e) => {
        // this.setState({
        //     roomno : e.target.value
        // },() => {console.log("room no = " + this.state.roomno)});
        setRoomno(e.target.value);
        // console.log("room no = " + this.state.roomno);
    }

    const HandleSelectedStatusChange = (e) => {
        // console.log(e.target.value);
        if(e.target.value==="--select new status--"){
            // this.setState({
            //     newstatus : null
            // },() => {console.log("new status = " + this.state.newstatus);});

        }
        else{
            // this.setState({
            //     newstatus : e.target.value
            // },() => {console.log("new status = " + this.state.newstatus);});
            setNewstatus(e.target.value);
        }
        // console.log("new status = " + this.state.newstatus);
    }

    // onClick(){
    //     //modify this function to get the status of the room number entered from DB
    //     if(this.state.roomno){
    //         this.setState({
    //             currentstatus : ROOM_STATUS.AVAILABLE
    //         }, () => {console.log("current status = " + this.state.currentstatus);});
    //     }
    //     // console.log("current status = " + this.state.currentstatus);
    // }

        return(
            <div >
                <ManagerPortalHeader />
                <h1 className="h1center">Update Room Status</h1>
                <br/>
                    <Form style={{marginLeft:'5%'}}>
                        <FormGroup row >
                            <Label id="roomno" md={2}><b>Room Number</b></Label>
                            <Col md={3}>
                                <Input type="text" placeholder="enter room number" value={roomno} onChange={HandleRoomNoChange}/>
                            </Col>
                            <Col>
                                <Button size='m' variant='primary' disabled={!roomno} onClick = {SettingCurrentstatus} >submit</Button>
                            </Col>
                        </FormGroup>

                        <FormGroup row >
                        <Label id="currentstatus" md={2}><b>Current Status</b></Label>
                            <Col md={3}>
                                <Input disabled placeholder={currentstatus}/>
                            </Col>
                        </FormGroup>
                        
                        <FormGroup row >
                            <Label id="newstatus" md={2}><b>New Status</b></Label>
                            <Col md={2}>
                                <select value={newstatus} onChange={HandleSelectedStatusChange}>
                                    <option selected disabled={!currentstatus}>--select new status--</option>
                                    {Object.keys(ROOM_STATUS).map(displaydata => (
                                        <option disabled={!currentstatus}>{displaydata}</option>
                                    ))}
                                </select>
                            </Col>
                            <Col>
                                <Button size='m' variant='primary' disabled={!newstatus} onClick={updateRoomRecord}>Update Status</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                
            </div>
        );

}

export default UpdateRoomStatus;