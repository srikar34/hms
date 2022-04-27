import { Component } from "react";
import ManagerPortalHeader from "./managerPortalHeader";
import { FormGroup,Label,Col,Input,Form } from "reactstrap";
import { Button } from 'react-bootstrap';
import { ROOM_STATUS } from "../assets/statusValues";

class UpdateRoomStatus extends Component {

    constructor(props){
        super(props);
        this.state = {
            roomno : null,
            currentstatus : null,
            newstatus : "",
        }
        this.onClick = this.onClick.bind(this);
        this.handleRoomNoChange = this.handleRoomNoChange.bind(this);
        this.handleSelectedStatusChange = this.handleSelectedStatusChange.bind(this);
        this.reset = this.reset.bind(this);
    }

    reset(){
        this.setState({
            roomno : null,
            currentstatus : null,
            newstatus : ''
        });
    }

    handleRoomNoChange(e){
        this.setState({
            roomno : e.target.value
        },() => {console.log("room no = " + this.state.roomno)});
        // console.log("room no = " + this.state.roomno);
    }

    handleSelectedStatusChange(e){
        // console.log(e.target.value);

        this.setState({
            newstatus : e.target.value
        },() => {console.log("new status = " + this.state.newstatus);});
        // console.log("new status = " + this.state.newstatus);
    }

    onClick(){
        //modify this function to get the status of the room number entered from DB
        if(this.state.roomno){
            this.setState({
                currentstatus : ROOM_STATUS.AVAILABLE
            }, () => {console.log("current status = " + this.state.currentstatus);});
        }
        // console.log("current status = " + this.state.currentstatus);
    }

    render(){
        return(
            <div >
                <ManagerPortalHeader />
                <h1 className="h1center">Update Room Status</h1>
                <br/>
                <Form >
                    <FormGroup row >
                        <Label id="roomno" md={2}><b>Room Number</b></Label>
                        <Col md={3}>
                            <Input type="text" placeholder="enter room number" value={this.state.roomno} onChange={this.handleRoomNoChange}/>
                        </Col>
                        <Col>
                            <Button size='m' variant='primary' disabled={!this.state.roomno} onClick={() => this.onClick()}>submit</Button>
                        </Col>
                    </FormGroup>

                    <FormGroup row >
                    <Label id="roomstatus" md={2}><b>Current Status</b></Label>
                        <Col md={3}>
                            <Input disabled placeholder={this.state.currentstatus}/>
                        </Col>
                    </FormGroup>
                    
                    <FormGroup row >
                        <Label id="newstatus" md={2}><b>New Status</b></Label>
                        <Col md={2}>
                            <select value={this.state.newstatus}  onChange={this.handleSelectedStatusChange}>
                                <option selected disabled={!this.state.currentstatus}>--select new status--</option>
                                {Object.keys(ROOM_STATUS).map(displaydata => (
                                    <option disabled={!this.state.currentstatus}>{displaydata}</option>
                                ))}
                            </select>
                        </Col>
                        <Col>
                            <Button size='m' variant='primary' disabled={!this.state.newstatus} onClick={this.reset}>Update Status</Button>
                        </Col>
                    </FormGroup>
                </Form>
                
            </div>
        );
    }
}

export default UpdateRoomStatus;