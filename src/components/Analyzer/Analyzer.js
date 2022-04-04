import React from 'react';
import './Analyzer.css';
// import img from './images/she-by-haggard.jpg'

// Book Analyzer Parts

const Analyzer = () => {
    return (
        <div className='flex items-center justify-between px-10 md:px-20 mt-3 w-auto gap-6 mb-5'>
           <div>
           <img src="https://m.media-amazon.com/images/I/41E7aOOEqCL.jpg" alt="" />
           </div>
           <div className='md:mb-25 w-3/4'>
               <h1 className='md:text-5xl font-bold text-red-700'>A little learning is all the therapy <br/><span className='text-black font-serif'>a person needs sometimes</span></h1>
               <p className='font-bold text-zinc-500'>Our purpose is to help others to decide if they should or want to read a particular book or not. This is done by reading and evaluating a given book, and summing it up in terms of how well it has been written and/or how well the author has handled the subject matter. A review can explore the positive or negative elements (or both) of a book.So lets check reviews with us and choose your book.</p>
           </div>
        </div>

    );
};

export default Analyzer;