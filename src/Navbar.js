import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Call onLogout prop
    navigate('/'); // Redirect to login page
  };

  return (
    <nav>
      <Link to="/home">Logo</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;