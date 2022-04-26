import React, { Component } from 'react'; 
import { Button } from 'react-bootstrap';
import '../App.css';

class LoginButton extends Component {
    render() {
        return(
            <div >
                <Button size='lg' variant='outline-primary'> {this.props.buttonName}</Button>
            </div>
        );
    }
}

export default LoginButton;