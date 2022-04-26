import '../App.css';
import { Component } from 'react';
import NavBar from './navbar';
import LoginSelect from './loginSelect';

class MainPage extends Component {
  render(){
    return (
      <div className='App'>
        <NavBar/>
        <LoginSelect/>
      </div>
    );
  }
}

export default MainPage;