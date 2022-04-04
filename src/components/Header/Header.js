import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='flex items-center justify-between bg-black text-white py-4 px-10'>
            <div className='text-3xl font-bold text-yellow-600'>Book Analyzer</div>
            <div className='nav-links'>
            <Link className='hover:text-yellow-600' to="/">Home</Link>
            <Link className='ml-5 hover:text-yellow-600' to="/reviews">Reviews</Link >
            <Link className='mx-5 hover:text-yellow-600' to="/dashboard">Dashboard</Link >
            <Link className='hover:text-yellow-600' to="/blogs">Blogs</Link >
            </div>
        </nav>
    );
};

export default Header;