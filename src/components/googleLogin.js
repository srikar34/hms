import React, {Component }  from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import '../App.css';

class Googlelogin extends Component {
    render(){
        return(
            <div className="g-signin">
            <Login />
            </div>
        );
    }
}

export default Googlelogin;