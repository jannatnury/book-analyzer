import React from 'react';

const Blogs = () => {
    return (

        // Questions and answers section

        <div className='bg-gray-100 md:p-40 sm:20  mt-3'>
            <h1 className='text-3xl font-serif font-bold'><span className='text-red-600'>Ques:</span>What is context API ?</h1>
            <p><span className='text-green-600 font-bold text-2xl'>Ans:</span>Context API helps passing data to child component without pops drilling. It is like mobile network. By wrapping context API component any data can be passed through Context API to the child components or file only. It creates a context and export to share file to another file. It provides two components Provider and Consumer wrapped by Context API component. Last, in the Provider component any dynamic or static data can pass through value. and catch from child component.</p>
            <h1 className='text-3xl font-serif font-bold mt-3'><span className='text-red-600'>Ques:</span>What's the differcence between inline, block and inline-block elements?</h1>
            <p><span className='text-green-600 font-bold text-2xl'>Ans:</span>Inline: Inline elements sits one after along side in the same line. It takes the width as much as it needs. Block: Block elements takes all the width as much it can. These elements starts always in a new line. Inline-block: Inline-block elements are sits on in the same line but behaves like block elements.</p>
            <h1 className='text-3xl font-serif font-bold mt-3'><span className='text-red-600'>Ques:</span>What is semantic tags?</h1>
            <p><span className='text-green-600 font-bold text-2xl'>Ans:</span>Semantic tags are meaningful html tags. By reading tag we can understand the purpose of that tag. Like - section, article, main, strong, bold etc.</p>
        </div>
    );
};

export default Blogs;