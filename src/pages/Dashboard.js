// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Dashboard.css'; // CSS file for styling

// const Dashboard = () => {
//   const [salesData, setSalesData] = useState({});
//   const [reservations, setReservations] = useState([]);
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     // Fetch dashboard data from backend
//     axios.get('/api/dashboard')
//       .then(response => {
//         setSalesData(response.data.sales);
//         setReservations(response.data.reservations);
//         setOrders(response.data.orders);
//       })
//       .catch(error => console.error('Error fetching dashboard data:', error));
//   }, []);

//   return (
//     <div className="dashboard-container">
//       <h1>Dashboard</h1>
//       <div className="dashboard-overview">
//         <div className="overview-item">
//           <h2>Total Sales</h2>
//           <p>{salesData.totalSales} USD</p>
//         </div>
//         <div className="overview-item">
//           <h2>Reservations Today</h2>
//           <p>{reservations.length}</p>
//         </div>
//         <div className="overview-item">
//           <h2>Active Orders</h2>
//           <p>{orders.length}</p>
//         </div>
//       </div>

//       <div className="dashboard-details">
//         <section>
//           <h2>Recent Reservations</h2>
//           <ul>
//             {reservations.map(reservation => (
//               <li key={reservation.id}>
//                 {reservation.name} - {reservation.date} at {reservation.time}
//               </li>
//             ))}
//           </ul>
//         </section>

//         <section>
//           <h2>Active Orders</h2>
//           <ul>
//             {orders.map(order => (
//               <li key={order.id}>
//                 {order.name} - Status: {order.status}
//               </li>
//             ))}
//           </ul>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';
import { FaDollarSign, FaUtensils, FaConciergeBell } from 'react-icons/fa';
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalSales: 0,
    reservationsToday: 0,
    activeOrders: 0,
    recentReservations: [],
    activeOrdersList: [],
  });

  useEffect(() => {
    axios.get('/api/dashboard')
      .then(response => setDashboardData(response.data))
      .catch(error => console.error('Error fetching dashboard data:', error));
  }, []);

  const data = {
    labels: ['Sales', 'Reservations', 'Orders'],
    datasets: [{
      label: 'Statistics',
      data: [dashboardData.totalSales, dashboardData.reservationsToday, dashboardData.activeOrders],
      backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
    }],
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="dashboard-overview">
        <div className="overview-item">
          <FaDollarSign className="icon" />
          <h2>Total Sales</h2>
          <p>${dashboardData.totalSales}</p>
        </div>
        <div className="overview-item">
          <FaConciergeBell className="icon" />
          <h2>Reservations Today</h2>
          <p>{dashboardData.reservationsToday}</p>
        </div>
        <div className="overview-item">
          <FaUtensils className="icon" />
          <h2>Active Orders</h2>
          <p>{dashboardData.activeOrders}</p>
        </div>
      </div>
      <div className="dashboard-charts">
        <h3>Sales and Reservations Overview</h3>
        <Line data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
