// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Notifications.css'; // CSS file for styling

// const Notifications = () => {
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     // Fetch notifications from backend
//     axios.get('/api/notifications')
//       .then(response => setNotifications(response.data))
//       .catch(error => console.error('Error fetching notifications:', error));
//   }, []);

//   return (
//     <div className="notifications-container">
//       <h2>Notifications</h2>
//       {notifications.length === 0 ? (
//         <p>No new notifications</p>
//       ) : (
//         <ul>
//           {notifications.map(notification => (
//             <li key={notification.id} className={`notification-item ${notification.type}`}>
//               {notification.message}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Notifications;
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notifications = ({ message, type }) => {
  const notify = () => {
    switch (type) {
      case 'success':
        toast.success(message);
        break;
      case 'error':
        toast.error(message);
        break;
      case 'info':
        toast.info(message);
        break;
      default:
        toast(message);
        break;
    }
  };

  return (
    <div>
      <button onClick={notify}>Show Notification</button>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
    </div>
  );
};

export default Notifications;
