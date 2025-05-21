import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/Home"><h2>StudentManagement</h2></Link>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/Home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;