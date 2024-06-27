// LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const apiUrl = 'http://localhost:8000';

  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = { email, password };
    axios.post(`${apiUrl}/login`, credentials)
      .then(response => {
        console.log('Login successful:', response.data);
        // Store token in local storage or cookies
      })
      .catch(error => console.error('Login failed:', error));
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
    </div>
  );
};

export default LoginForm;
