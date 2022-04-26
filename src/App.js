import './App.css';
import { Component } from 'react';
// import { HOTEL_NAME,MANAGER } from './assets/names';
import MainPage from './components/mainPage';
import Manager from './components/managerHome';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/manager" element={<Manager />} />
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
