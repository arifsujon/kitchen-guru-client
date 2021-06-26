import { faHome, faPlus, faTasks, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar" style={{ height: '100vh', maxWidth: '100%' }}>
            <ul className="pt-5 ps-3">
                <li>
                    <Link to="/home" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addBlog" className="text-white">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Blog</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageBlog" className="text-white">
                        <FontAwesomeIcon icon={faTasks} /> <span>Manage Blog</span>
                    </Link>
                </li>
                <li>
                    <Link to="/makeAdmin" className="text-white">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;