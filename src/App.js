import './App.css';
import { Component } from 'react';
// import { HOTEL_NAME,MANAGER } from './assets/names';
import MainPage from './components/mainPage';
import Manager from './components/managerHome';
import Rooms from './components/rooms';
import UpdateRoomStatus from './components/updateRoomStatus';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './components/services';
import Complaints from './components/complaints';
import ActiveComplaints from './components/activeComplaints';
import ClosedComplaints from './components/closedComplaints';
import Rar from './components/rar';
import ManagerProfile from './components/managerProfile';
import Guest from './components/guestHome';
import GuestComplaints from './components/guestComplaints';
import GuestServices from './components/guestServices';
import GuestBill from './components/guestBill';
import GuestRar from './components/guestRar';
import GuestProfile from './components/guestProfile';
import Staff from './components/staffHome';
import StaffProfile from './components/staffProfile';

import ContactUs from './components/contactUs';
import AddGuest from './components/addNewGuest';
import Login from './components/login';
import ManagerLogin from './components/managerLogin';
import StaffLogin from './components/staffLogin';
import CheckAllRoomDetails from './components/checkAllRoomDetails';

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
            <Route exact path="/manager/rooms/updatestatus" element={<UpdateRoomStatus />} />
            <Route exact path="/manager/rooms/checkallroomdetails" element={<CheckAllRoomDetails />} />
            <Route exact path="/manager/services" element={<Services />} />
            <Route exact path="/manager/complaints" element={<Complaints />} />
            <Route exact path="/manager/complaints/active" element={<ActiveComplaints />} />
            <Route exact path="/manager/complaints/closed" element={<ClosedComplaints />} />
            <Route exact path="/manager/rar" element={<Rar />} />
            <Route exact path="/manager/profile" element={<ManagerProfile />} />
            <Route exact path="/guest" element={<Guest />} />
            <Route exact path="/guest" element={<Guest />} />
            <Route exact path="/guest/contact" element={<ContactUs />} />
            <Route exact path="/guest/services" element={<GuestServices />} />
            <Route exact path="/guest/complaints" element={<GuestComplaints />} />
            <Route exact path="/guest/bill" element={<GuestBill />} />
            <Route exact path="/guest/rar" element={<GuestRar />} />
            <Route exact path="/guest/profile" element={<GuestProfile />} />
            <Route exact path="/staff" element={<Staff />} />
            <Route exact path="/staff/profile" element={<StaffProfile />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/managerLogin" element={<ManagerLogin />} />
            <Route exact path="/staffLogin" element={<StaffLogin />} />

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
