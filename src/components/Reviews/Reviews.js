import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';

const Reviews = () => {
    const [reviews, setReviews] =useState([]);
    useEffect(()=>{
        fetch(`data.json`)
        .then(res=> res.json())
        .then(data=>setReviews(data));
    },[]);
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-7 p-4'>
            {/* mapping of reviews to display on carrd */}
            {
                    reviews.map(review=> <Cards
                    key={review.id} review={review}
                    ></Cards>)
            }
        </div>
    );
};

export default Reviews;