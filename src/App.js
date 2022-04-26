import './App.css';
import { Component } from 'react';
// import { HOTEL_NAME,MANAGER } from './assets/names';
import MainPage from './components/mainPage';
import Manager from './components/managerHome';
import Rooms from './components/rooms';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './components/services';
import Complaints from './components/complaints';
import Rar from './components/rar';

class App extends Component {
  render(){
    return (
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/manager" element={<Manager />} />
            <Route exact path="/manager/rooms" element={<Rooms />} />
            <Route exact path="/manager/services" element={<Services />} />
            <Route exact path="/manager/complaints" element={<Complaints />} />
            <Route exact path="/manager/rar" element={<Rar />} />
            {/* <Route exact path="/" component={MainPage} /> */}
          </Routes>
          {/* <redirect to="/" /> */}
        </Router>

        {/* <MainPage/> */}
      </div>
    );
  }
}

export default App;
