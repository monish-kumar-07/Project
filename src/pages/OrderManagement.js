import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OrderManagement.css';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from backend
    axios.get('/api/orders')
      .then(response => setOrders(response.data))
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  const handleStatusChange = (orderId, status) => {
    // Update order status
    axios.put(`/api/orders/${orderId}`, { status })
      .then(response => {
        setOrders(prevOrders => prevOrders.map(order => 
          order.id === orderId ? { ...order, status: response.data.status } : order
        ));
      })
      .catch(error => console.error('Error updating order status:', error));
  };

  return (
    <div className="order-management-container">
      <h1>Order Management</h1>
      <ul className="order-list">
        {orders.map(order => (
          <li key={order.id} className={`order-item ${order.status}`}>
            <p>Order #{order.id} - {order.item}</p>
            <select value={order.status} onChange={(e) => handleStatusChange(order.id, e.target.value)}>
              <option value="pending">Pending</option>
              <option value="preparing">Preparing</option>
              <option value="served">Served</option>
              <option value="completed">Completed</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderManagement;
