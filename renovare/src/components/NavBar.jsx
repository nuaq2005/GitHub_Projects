import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src="/images/logo.jpeg" alt="Renovare Logo" className='logo'/>
                <span>Renovare</span>
            </div>
            <ul className='navbar-links'>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/create-character"> Create A Post </Link></li>
            </ul>
        </div>
    );
};

export default NavBar;