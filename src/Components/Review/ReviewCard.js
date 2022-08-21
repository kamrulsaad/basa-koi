import React from 'react';
import ReactStars from "react-rating-stars-component";

const ReviewCard = ({ review }) => {

    const { rating, comment, img, name, date, month, year, hours, minutes } = review;

    const firstExample = {
        size: 30,
        value: rating,
        edit: false
    };

    return (
        <div className="p-8 bg-white border rounded shadow-sm">
            <p className=" text-xs font-semibold tracking-wide uppercase">
                <span className="text-gray-800">{hours}:{minutes} on {date}/{month + 1}/{year}</span>
            </p>
            <ReactStars {...firstExample} />
            <p className="mb-5 text-gray-700">
                {comment}
            </p>
            <div className="flex items-center gap-2">
                <img
                    src={img}
                    alt="avatar"
                    className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
                <div>
                    <p className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400">
                        {name}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;