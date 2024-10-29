import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2> Navigate </h2>
            <ul>
                <li><Link to="/"> Home </Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;