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
        <li className={path === '/' ? 'active' : ""}>
          <Link to="/" className={path === '/' ? 'active' : ""}>Home</Link>
        </li>
        <li className={path === '/work' ? 'active' : ""}>
          <Link to="/work" className={path === '/work' ? 'active' : ""}>Our Work</Link>
        </li>
        {/* <li className={path === '/blog' ? 'active' : ""}>
          <Link to="/blog" className={path === '/blog' ? 'active' : ""}>Blogs</Link>
        </li> */}
        <li className={path === '/careers' ? 'active' : ""}>
          <Link to="/careers" className={path === '/careers' ? 'active' : ""}>Careers</Link>
        </li>
        <li className={path === '/about' ? 'active' : ""}>
          <Link to="/about" className={path === '/about' ? 'active' : ""}>About Us</Link>
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
