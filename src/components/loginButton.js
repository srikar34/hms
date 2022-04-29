import React, { Component } from 'react'; 
import { Button } from 'react-bootstrap';
import '../App.css';
import { Link } from "react-router-dom";

class LoginButton extends Component {
    render() {
        return(
            <div >
                <Link to={this.props.link}>    
                    <Button size='lg' variant='outline-dark' > {this.props.buttonName}</Button>
                </Link>
            </div>
        );
    }
}

export default LoginButton;