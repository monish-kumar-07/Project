// import React, { useState } from 'react';
// import './Reservations.css';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const Reservations = () => {
//   const [reservation, setReservation] = useState({
//     name: '',
//     email: '',
//     date: new Date(),
//     time: '',
//     guests: 1,
//   });

//   const handleChange = (e) => {
//     setReservation({ ...reservation, [e.target.name]: e.target.value });
//   };

//   const handleDateChange = (date) => {
//     setReservation({ ...reservation, date });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Submit reservation to backend
//     console.log('Reservation submitted:', reservation);
//   };

//   return (
//     <div className="reservations-container">
//       <h1>Make a Reservation</h1>
//       <form onSubmit={handleSubmit} className="reservation-form">
//         <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
//         <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//         <DatePicker selected={reservation.date} onChange={handleDateChange} className="datepicker" />
//         <input type="time" name="time" onChange={handleChange} required />
//         <input type="number" name="guests" min="1" max="10" placeholder="Guests" onChange={handleChange} required />
//         <button type="submit">Reserve Table</button>
//       </form>
//     </div>
//   );
// };

// export default Reservations;
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import './Reservations.css';

const Reservations = () => {
  const [reservation, setReservation] = useState({
    name: '',
    date: new Date(),
    time: '',
    numberOfGuests: 1,
  });

  const handleChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setReservation({ ...reservation, date: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example API call to submit reservation
    axios.post('/api/reservations', reservation)
      .then(response => {
        console.log('Reservation submitted:', response.data);
      })
      .catch(error => {
        console.error('Error submitting reservation:', error);
      });
  };

  return (
    <div className="reservations-container">
      <h1>Make a Reservation</h1>
      <form onSubmit={handleSubmit} className="reservation-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={reservation.name}
          onChange={handleChange}
          required
        />
        <DatePicker
          selected={reservation.date}
          onChange={handleDateChange}
          dateFormat="MMMM d, yyyy"
          className="date-picker"
        />
        <input
          type="time"
          name="time"
          value={reservation.time}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="numberOfGuests"
          placeholder="Number of Guests"
          value={reservation.numberOfGuests}
          onChange={handleChange}
          min="1"
          required
        />
        <button type="submit">Submit Reservation</button>
      </form>
    </div>
  );
};

export default Reservations;
