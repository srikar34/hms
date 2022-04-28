import { FormGroup,Label,Col,Input } from "react-bootstrap";
import { Component } from "react";
import ReactStars from "react-rating-stars-component";

class RateHotel extends Component {
    render(){
        return(
            <div>
                <ReactStars />
                <div className="row row-content">
                    <div>
                        <h3>Send us Your feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <FormGroup row>
                            <Label htmlFor="type you feedback here">Your Feedback</Label>
                            <Col md={10}>
                                <Input type="textarea" rows="12" />
                            </Col>
                        </FormGroup>
                    </div>
                </div>
            </div>
        );
    }
}

export default RateHotel;