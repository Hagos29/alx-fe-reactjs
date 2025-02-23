import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link to="/about">About</Link>
        </li>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link to="/services">Services</Link>
        </li>
        <li style={{ display: 'inline' }}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
