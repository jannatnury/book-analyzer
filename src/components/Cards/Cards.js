import React from 'react';
import './Card.css';

const Cards = (props) => {

    // destructuring from Reviews component

    const { name, img, review, rating } = props.review;
    return (
        <div className='card-container ml-6'>

            {/* card of every single review */}

            <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                <img className="card-img" src={img} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Name:{name}</div>
                    <p className="text-gray-700 text-base">{review}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Rating:{rating}</span>
                </div>
            </div>
        </div>
    );
};

export default Cards;