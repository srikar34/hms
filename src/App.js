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
import Guest from './components/guestHome';
import GuestComplaints from './components/guestComplaints';
import GuestServices from './components/guestServices';
import GuestBill from './components/guestBill';
<<<<<<< HEAD
import GuestRar from './components/guestRar'
import AddGuest from './components/addNewGuest';
=======
import GuestRar from './components/guestRar';
import Staff from './components/staffHome';
>>>>>>> 5974f18059e9e55677951d4a2451291df12c96a9

class App extends Component {
  render(){
    return (
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/manager" element={<Manager />} />
            <Route exact path="/manager/rooms" element={<Rooms />} />
            <Route exact path="/manager/rooms/addguest" element={<AddGuest />} />
            <Route exact path="/manager/services" element={<Services />} />
            <Route exact path="/manager/complaints" element={<Complaints />} />
            <Route exact path="/manager/rar" element={<Rar />} />
            <Route exact path="/guest" element={<Guest />} />
            <Route exact path="/guest/services" element={<GuestServices />} />
            <Route exact path="/guest/complaints" element={<GuestComplaints />} />
            <Route exact path="/guest/bill" element={<GuestBill />} />
            <Route exact path="/guest/rar" element={<GuestRar />} />
<<<<<<< HEAD
=======
            <Route exact path="/staff" element={<Staff />} />
            {/* <Route exact path="/" component={MainPage} /> */}
>>>>>>> 5974f18059e9e55677951d4a2451291df12c96a9
          </Routes>
          {/* <redirect to="/" /> */}
        </Router>

        {/* <MainPage/> */}
      </div>
    );
  }
}

export default App;
