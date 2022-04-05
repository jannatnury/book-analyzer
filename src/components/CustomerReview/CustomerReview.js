import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cards from '../Cards/Cards';
const CustomerReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`data.json`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    const navigate = useNavigate();
    const btnClicked = () => {
        navigate("/reviews");
    };
    const newReviews = reviews.slice(0, 3);
    return (
        <div className='mb-5'>
            <h1 className='text-3xl text-green-700 font-sans font-bold'>Customers Reviews <small> ( <span className='text-red-600'>3</span> )</small></h1>
            <div className="grid grid-cols-3 gap-4">
                {
                    newReviews.map(review => <Cards
                        key={review.id} review={review}
                    ></Cards>)
                }
            </div>
            <button onClick={btnClicked} className='text-1xl text-white bg-red-700 p-2 px-4 rounded-3xl items-center mt-8'>See more reviews</button>
        </div>
    );
};

export default CustomerReview;