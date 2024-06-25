import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = ({ setShowLogin }) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className='navbar'>
      <Link to="/">
        <img src={assets.logo} alt='logo' className='logo' />
      </Link>
      <ul className="navbar-menu">
        <li className={path === '/phdwebsite' ? 'active' : ""}>
          <Link to="/phdwebsite" className={path === '/phdwebsite' ? 'active' : ""}>Home</Link>
        </li>
        <li className={path === '/phdwebsite/work' ? 'active' : ""}>
          <Link to="/phdwebsite/work" className={path === '/phdwebsite/work' ? 'active' : ""}>Our Work</Link>
        </li>
        <li className={path === '/phdwebsite/careers' ? 'active' : ""}>
          <Link to="/phdwebsite/careers" className={path === '/phdwebsite/careers' ? 'active' : ""}>Careers</Link>
        </li>
        <li className={path === '/phdwebsite/about' ? 'active' : ""}>
          <Link to="/phdwebsite/about" className={path === '/phdwebsite/about' ? 'active' : ""}>About Us</Link>
        </li>
      </ul>
      <div className='navbar-right'>
        <div className="navbar-search-icon">
          <div className="dot"></div>
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
