import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2> Navigate </h2>
            <ul>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/create-character"> Create A Character </Link></li>
                <li><Link to="/gallery"> View All Characters </Link></li>

            </ul>
        </div>
    );
};

export default Sidebar;