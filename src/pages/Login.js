// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import './Login.css'; // CSS file for styling

// // const Login = () => {
// //   const [credentials, setCredentials] = useState({ email: '', password: '' });
// //   const [error, setError] = useState('');

// //   const handleChange = (e) => {
// //     setCredentials({ ...credentials, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Authenticate user
// //     axios.post('/api/login', credentials)
// //       .then(response => {
// //         console.log('Login successful:', response.data);
// //         setError('');
// //         // Redirect to dashboard or another page
// //       })
// //       .catch(error => setError('Invalid email or password'));
// //   };

// //   return (
// //     <div className="login-container">
// //       <h1>Login</h1>
// //       <form onSubmit={handleSubmit}>
// //         <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
// //         <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
// //         {error && <p className="error-message">{error}</p>}
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;
// import React, { useState } from 'react';
// import axios from 'axios';
// import './Login.css';

// const Login = () => {
//   const [credentials, setCredentials] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('/api/login', credentials)
//       .then(response => {
//         // Handle successful login
//         console.log('Logged in:', response.data);
//       })
//       .catch(error => {
//         console.error('Login error:', error);
//         setError('Invalid email or password');
//       });
//   };

//   return (
//     <div className="login-container">
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit} className="login-form">
//         <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//         {error && <p className="error-message">{error}</p>}
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example login API request
    axios.post('/api/login', credentials)
      .then(response => {
        // Handle successful login
        console.log('Logged in:', response.data);
      })
      .catch(error => {
        console.error('Login error:', error);
        setError('Invalid email or password');
      });
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          onChange={handleChange} 
          required 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          onChange={handleChange} 
          required 
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
