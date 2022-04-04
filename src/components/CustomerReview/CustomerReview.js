import React from 'react'; 
const CustomerReview = () => {
    return (
        <div className='mb-5'>
            <h1 className='text-3xl text-green-700 font-sans font-bold'>Customers Reviews <small> ( <span className='text-red-600'>3</span> )</small></h1>
            <button className='text-1xl text-white bg-red-700 p-2 px-4 rounded-3xl items-center mt-8'>See more reviews</button>
        </div>
    );
};

export default CustomerReview;