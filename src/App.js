import './App.css';
import { Component } from 'react';
// import { HOTEL_NAME,MANAGER } from './assets/names';
import NavBar from './components/navbar';
import LoginSelect from './components/loginSelect';


class App extends Component {
  render(){
    return (
      <div className='App'>
        <NavBar/>
        <LoginSelect/>
      </div>
    );
  }
}

export default App;
