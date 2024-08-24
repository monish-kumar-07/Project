import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
//import ReservationForm from './pages/ReservationForm';
import Reservations from './pages/Reservations';
import OrderManagement from './pages/OrderManagement';
import Login from './pages/Login';
import Notifications from './components/Notifications';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

//import React from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Dashboard from './pages/Dashboard';
//import Login from './pages/Login';
//import Reservations from './pages/Reservations';
import Navbar from './components/Navbar'; // Assuming you have a Navbar component
const App = () => {
  return (
    <Router>
      <div>
        <h1>Restaurant Management System</h1>
        {/* Add Navigation Links Here */}
        <DatePicker/>
        <Navbar/> 
        {/* <Notifications/> */}

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/orders" element={<OrderManagement />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path='/navbar' element={<Navbar/>}/>
          <Route path='/datepicker' element={<DatePicker/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
