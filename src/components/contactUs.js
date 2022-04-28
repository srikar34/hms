import { Component } from "react";
import { EMAIL, MOBILE } from "../assets/names";
import GuestPortalHeader from "./guestPortalHeader";

class ContactUs extends Component{
    render(){
        return(
            <div>
                <GuestPortalHeader />
                <div>You can email us at {EMAIL}</div>
                <div>You can call us at {MOBILE}</div>
            </div>
        );
    }
}

export default ContactUs;
