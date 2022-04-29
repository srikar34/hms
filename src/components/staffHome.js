import React, { Component } from 'react'; 
import { Button } from 'react-bootstrap';
import StaffPortalHeader from './staffPortalHeader';
import { Form,FormGroup,Label,Col,Input } from "reactstrap";
import { SERVICES, SERVICE_STATUS } from '../assets/statusValues';

class Staff extends Component {

    constructor(props){
        super(props);
        this.state = {
            roomno : "C212",
            service : SERVICES.LAUNDRY,
            selectd_status : null,
            bill : null
        };
        this.handleStatus = this.handleStatus.bind(this);
        this.handleBill = this.handleBill.bind(this);
    }

    handleStatus(e){
        console.log(e.target.value);
        if(e.target.value==="--select status--"){
            this.setState({
                selected_status : null
            });
        }
        else{
            this.setState({
                selected_status : e.target.value
            });
        }  
    }

    handleBill(e){
        this.setState({
            bill : e.target.value
        });
    }

    render(){
        return(
            <div>
                <StaffPortalHeader/>
                <div>
                    <div >
                    <h2 className='h1center'> Current Work Assigned</h2>
                    <Form style={{marginLeft:'5%'}}>
                        <FormGroup  row>
                            <Label id="roomnumber" md={2}><b>Room No.</b></Label>
                            <Col md={1}>
                                <Input disabled value={this.state.roomno}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row >
                            <Label md={2}><b>Service</b></Label>
                            <Col md={1}>
                                <Input disabled value={this.state.service}/>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
                <div style={{marginLeft:'5%'}}>
                    <Form >
                        <FormGroup row >
                            <Label  md={2}><b>Update Status</b></Label>
                            <Col md={2}>
                                <select disabled={!this.state.roomno} value={this.state.selected_status} onChange={this.handleStatus}>
                                    <option>--select status--</option>
                                    {Object.values(SERVICE_STATUS).map(displaydata => (
                                        <option >{displaydata}</option>
                                    ))}
                                </select>
                            </Col>
                            <Col>
                                <Button size='m' variant='primary' disabled={!this.state.selected_status}>Submit</Button>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label  md={2}><b>Add Bill</b></Label>
                            <Col  md={2}>
                                <Input value={this.state.bill} type="number" placeholder="Enter Bill Here" onChange={this.handleBill}/>
                            </Col>
                            <Col>
                                <Button size='m' variant='primary' disabled={!this.state.bill}>Submit</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
                
                </div>
            </div>
        );
    }
}

export default Staff;