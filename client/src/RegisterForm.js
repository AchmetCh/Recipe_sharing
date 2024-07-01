// RegisterForm.js

import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap"; // Import necessary components from react-bootstrap
import "./styles.css"; // Import your CSS file for custom styles
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const apiUrl = "http://localhost:8000";
  const ToastSuccessful = () => toast("Registered Successful!");
  const ToastFailed = () => toast("Password and Confirmation not match");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      ToastFailed();
      return;
    }
    
    const newUser = { email, password };
    axios.post(`${apiUrl}/register`, newUser)
      .then((response) => {
        console.log(response.data);
        ToastSuccessful();
        setTimeout(() => navigate("/login"), 2000);
      })
      .catch((error) => console.log(error));
    console.log("Form submitted with:", email, password, confirmPassword);
    // Clear form fields after submission
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    ToastSuccessful();
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <Container>
      <h2 className="mt-4">Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <ToastContainer />
    </Container>
  );
};

export default RegisterForm;
