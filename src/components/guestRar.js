import { FormGroup,Label,Col,Input } from "reactstrap";
import { Component } from "react";
import ReactStars from "react-rating-stars-component";
import { Button } from 'react-bootstrap';
import GuestPortalHeader from "./guestPortalHeader";

class GuestRar extends Component {
    render(){
        return(
            <div >
                <GuestPortalHeader />
                <div style={{marginLeft:50}}>
                    <h3>Send us Your feedback</h3>
                    <ReactStars size={30} isHalf='true'/>
                    <br/>
                    <div className="row row-content">
                        <div className="col-12 col-md-9">
                            <FormGroup row>
                                <Label md={2}><b>Your Feedback</b></Label>
                                <Col md={10}>
                                    <Input type="textarea" rows="6" placeholder="type your feedback here"/>
                                </Col>
                            </FormGroup> 
                            <Button size='m' variant='primary' style={{float:"right"}} >submit</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GuestRar;