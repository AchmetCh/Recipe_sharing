// LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ToastSuccessful = () => toast("Login Successful!");
const ToastFailed = () => toast("Login Failed! Please try again.");
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const apiUrl = 'http://localhost:8000';
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = { email, password };
    axios.post(`${apiUrl}/login`, credentials)
      .then(response => { 
        console.log(response.status)
        if (response.status === 200) {
        localStorage.setItem('token', JSON.stringify(response.data.token));
        // localStorage.setItem('user', JSON.stringify(response.data.user));
        console.log('Login successful:', response.data);
        ToastSuccessful();
        setTimeout(() => navigate('/'), 2000); 
        }else {
          console.log('Login failed:', response);
          ToastFailed()
        }
      })
      .catch(error => console.error('Login failed:', error, ToastFailed()));
      
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    <ToastContainer />
    </div>
  );
};

export default LoginForm;
