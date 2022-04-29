import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

function LoginSelect() {

    localStorage.setItem('validEmail', JSON.stringify({valid : false}));

        return(
            <div className='wrapper'>
                <div >
                    <Link to="/login">    
                        <Button variant="outline-dark" size='lg'>Guest Portal</Button>
                    </Link>
                </div>
                <br/>
                <div >
                    <Link to="/managerLogin">    
                        <Button size='lg' variant='outline-dark' >Manager Portal</Button>
                    </Link>
                </div>
                <br/>
                <div >
                    <Link to="/staffLogin">    
                        <Button size='lg' variant='outline-dark' >Staff Portal</Button>
                    </Link>
                </div>
            </div>
        ); 
}

export default LoginSelect;