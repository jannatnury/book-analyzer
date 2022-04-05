import React from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import './Analyzer.css';

// Book Analyzer Part in web

const Analyzer = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row items-center justify-between px-10 md:px-20 mt-3 w-auto gap-6 mb-5'>
                <div>

                    {/* Book image for review */}

                    <img className='main-img' src="https://m.media-amazon.com/images/I/41E7aOOEqCL.jpg" alt="" />
                </div>
                <div className='md:mb-25 w-3/4 sm:order-last'>

                    {/* Web description parts */}

                    <h1 className='md:text-5xl font-bold text-red-700'>A little learning is all the therapy <br /><span className='text-black font-serif'>a person needs sometimes</span></h1>
                    <p className='font-bold text-zinc-500 mt-4'>Our purpose is to help others to decide if they should or want to read a particular book or not. This is done by reading and evaluating a given book, and summing it up in terms of how well it has been written and/or how well the author has handled the subject matter. A review can explore the positive or negative elements (or both) of a book.So lets check reviews with us and choose your book.</p>
                </div>
            </div>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Analyzer;