import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon}></i>
        {title}
      </h1>
      <ul>
        <li>
          <Link to='/'> Homes </Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/yida'> Complaints</Link>
        </li>
      </ul>
    </nav>
  );
};
Navbar.defaultProps = {
  title: 'Default Navbar',
  icon: 'fa fa-infinity'
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};
export default Navbar;
