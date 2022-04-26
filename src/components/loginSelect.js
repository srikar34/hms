import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

class LoginSelect extends Component {
    render() {
        return(
            <div className='wrapper'>
                <div >
                    <Link to="/manager">    
                        <Button size='lg' variant='outline-primary' >Guest Portal</Button>
                    </Link>
                </div>
                <br/>
                <div >
                    <Link to="/manager">    
                        <Button size='lg' variant='outline-primary' >Manager Portal</Button>
                    </Link>
                </div>
                <br/>
                <div >
                    <Link to="/manager">    
                        <Button size='lg' variant='outline-primary' >Staff Portal</Button>
                    </Link>
                </div>
            </div>
        ); 
    }
}

export default LoginSelect;