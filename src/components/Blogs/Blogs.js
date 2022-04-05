import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-gray-200 md:p-40 sm:20  mt-3'>
            <h1 className='text-3xl font-serif font-bold'><span className='text-red-600'>Ques:</span>What is context API ?</h1>
            <p><span className='text-green-600 font-bold text-2xl'>Ans:</span> Redux is great and came perfectly to answer the need for state management. Actually, it answered this need so well that it came to be known that you can't be a "true" React developer if you don't know your way around Redux. However, Redux has its disadvantages, and that's why it's important to know what Context API gives us that Redux doesn't:</p>
            <h1 className='text-3xl font-serif font-bold mt-3'><span className='text-red-600'>Ques:</span>What's the differcence between inline block and block elements?</h1>
            <p><span className='text-green-600 font-bold text-2xl'>Ans:</span> Generally,Inline elements occupy only enough width that is sufficient to it and allows other elements next to it which are inline. Inline elements don’t start from a new line and don’t have top and bottom margins as block elements have.
            Block elements: They consume the entire width available irrespective of their sufficiency. They always start in a new line and have top and bottom margins. It does not contain any other elements next to it.</p>
        </div>
    );
};

export default Blogs;