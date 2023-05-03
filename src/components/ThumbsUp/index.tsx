import React, { useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import './ThumbsUpButton.css';

export const ThumbsUp = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (

        <div className="container px-20 py-10 bg-white-100 rounded-lg flex flex-col items-center">
            {/* <p className="text-black mr-2 text-center text-3xl py-2">Do you find this page helpful?</p> */}
            <button className="bg-[#DAB31A] hover:bg-[#D2A41F] text-gray-800 font-bold py-2 px-8 rounded-md inline-flex items-center text-center " onClick={handleClick}>
                <FaThumbsUp className="thumbs-up-icon" />
                <span className="count text-2xl">{count}</span>
            </button>
        </div>
    );
}