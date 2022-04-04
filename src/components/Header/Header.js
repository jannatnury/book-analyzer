import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='flex align-center justify-between bg-black text-white py-4 px-10'>
            <div className='text-3xl font-bold text-yellow-600'>Book Analyzer</div>
            <div className='nav-links'>
            <Link to="/">Home</Link>
            <Link to="/reviews">Reviews</Link >
            <Link to="/dashboard">Dashboard</Link >
            <Link to="/blogs">Blogs</Link >
            </div>
        </nav>
    );
};

export default Header;