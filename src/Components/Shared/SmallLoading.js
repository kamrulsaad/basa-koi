import React from 'react';

const SmallLoading = () => {
    return (
        <svg className='animate-spin ml-2' width="20px" height="20px" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
                <circle cx="7" cy="7" r="6" stroke="#F5F5F5" strokeOpacity=".5" strokeWidth="2" />
                <path fill="#262626" fillOpacity=".5f5f" fillRule="nonzero" d="M7 0a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5V0z" />
            </g>
        </svg>
    );
};

export default SmallLoading;