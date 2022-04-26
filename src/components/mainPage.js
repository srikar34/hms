import '../App.css';
import { Component } from 'react';

// import { HOTEL_NAME,MANAGER } from './assets/names';
import NavBar from './navbar';
import LoginSelect from './loginSelect';
// import Manager from './components/managerHome';

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