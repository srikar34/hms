import React, { Component } from 'react'; 
import GuestPortalHeader from './guestPortalHeader';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Col, Label, Input} from 'reactstrap';
import { SERVICES } from '../assets/statusValues';

class Guest extends Component {
    constructor(props){
        super(props);

        this.state = {
            room_no : "C212",
            num_guests : 2,
            selected_service : null,
            complaint : null
        };
        this.handleComplaint = this.handleComplaint.bind(this);
        this.handleService  = this.handleService.bind(this);
    }

    handleComplaint(e){
        this.setState({
            complaint : e.target.value
        });
    }

    handleService(e){
        console.log(e.target.value);
        if(e.target.value==="--select service--"){
            this.setState({
                selected_service : null
            });
        }
        else{
            this.setState({
                selected_service : e.target.value
            });
        }   
    }

    render(){
        return(
            <div>
                <GuestPortalHeader />
                <div >
                    <h2 className='h1center'> Current Booking Details</h2>
                    <Form style={{marginLeft:'5%'}}>
                        <FormGroup  row>
                            <Label id="roomnumber" md={2}><b>Room No.</b></Label>
                            <Col md={1}>
                                <Input disabled value={this.state.room_no}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row >
                            <Label id="guests" md={2}><b>No. of Guests</b></Label>
                            <Col md={1}>
                                <Input disabled value={this.state.num_guests}/>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
                <br/>
                <div style={{marginLeft:'5%'}}>
                    <Form >
                        <FormGroup row >
                            <Label  md={2}><b>Need a Service?</b></Label>
                            <Col md={2}>
                                <select value={this.state.selected_service} onChange={this.handleService}>
                                    <option selected>--select service--</option>
                                    {Object.values(SERVICES).map(displaydata => (
                                        <option >{displaydata}</option>
                                    ))}
                                </select>
                            </Col>
                            <Col>
                                <Button size='m' variant='primary' disabled={!this.state.selected_service}>Submit</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                    <Form >
                        <FormGroup  row>
                            <Label md={2}><b>Have a Complaint?</b></Label>
                            <Col md={5} >
                                <Input rows="2" type="textarea" value={this.state.complaint} placeholder="type your complaint here" onChange={this.handleComplaint}/>
                            </Col>
                            <Col>
                                <Button size='m' variant='primary' disabled={!this.state.complaint}>Submit</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                    <div className='left'>
                        <Link to='/guest/contact'>
                            Contact Helpline?
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Guest;