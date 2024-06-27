// Layout.js

import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'; // Import necessary components from react-bootstrap
import RegisterForm from './RegisterForm'; // Import RegisterForm component
import './styles.css'; // Import your CSS file for custom styles

const Layout = ({ children }) => {
  return (
    <div>
     <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Recipe Sharing App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/new">Add Recipe</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/register">Register</a>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <div className="container mt-4">
        {children} {/* This will render the content of each page */}
      </div>
    </div>
  );
};

const RegisterFormLink = () => (
  <div>
    <h6 className="dropdown-header">Register</h6>
    <RegisterForm />
  </div>
);

export default Layout;
