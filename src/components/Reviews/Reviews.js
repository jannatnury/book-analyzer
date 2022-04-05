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
        <div className='grid grid-cols-3 gap-7'>
            {
                    reviews.map(review=> <Cards
                    key={review.id} review={review}
                    ></Cards>)
            }
        </div>
    );
};

export default Reviews;