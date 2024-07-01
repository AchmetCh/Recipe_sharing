// Layout.js
import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  const LogoutToast = () => toast("Bye! Bye!");
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  console.log("this is token :" + token);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    LogoutToast();
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Recipe Sharing App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {token ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/new">
                    Add Recipe
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/delete">
                    My Recipes
                  </a>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/register">
                    Register
                  </a>
                </li>
              </ul>
            )}
            {token && <button onClick={logout} className="btn btn-danger">Logout</button>}
            <ToastContainer />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container mt-4">{children}</div>
    </div>
  );
};



export default Layout;
