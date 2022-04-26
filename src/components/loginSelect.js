import React, { Component } from 'react'; 
import LoginButton from './loginButton';
import '../App.css';

class LoginSelect extends Component {
    render() {
        return(
            <div className='wrapper'>
                <LoginButton buttonName="Guest Portal"/>
                <LoginButton buttonName="Manager Portal"/>
                <LoginButton buttonName="Staff Portal"/>
            </div>
        ); 
    }
}

export default LoginSelect;