import { Component } from "react";
import { EMAIL, MOBILE } from "../assets/names";
import GuestPortalHeader from "./guestPortalHeader";

class ContactUs extends Component{
    render(){
        return(
            <div>
                <GuestPortalHeader />
                <div><b>You can email us at <a href="mailto : support.hotelnostalgia@gmail.com">support.hotelnostalgia@gmail.com</a> </b></div>
                <div><b>You can call us at <a href="tel:9848022335">9848022335</a></b></div>
            </div>
        );
    }
}

export default ContactUs;
