import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/reviews">ReviewsHome</Link >
            <Link to="/dashboard">Dashboard</Link >
            <Link to="/blogs">Blogs</Link >
        </nav>
    );
};

export default Header;