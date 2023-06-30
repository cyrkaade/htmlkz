import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css"; // Import the CSS file for styling

const Navbar = ({ isLoggedIn, logIn, logOut }) => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
      navigate('/');
    };
    const handleLogoutClick = () => {
        logOut()
        navigate('/');
      };
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/home" className="navbar-logo">
          HTML IS KAZAKH
        </Link>
      </div>
      <div className="navbar-right">
        {isLoggedIn ? (
          <button className="navbar-button" onClick={logOut}>
            Logout
          </button>
        ) : (
          <button className="navbar-button" onClick={handleLoginClick}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;