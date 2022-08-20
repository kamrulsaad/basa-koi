import React from 'react';
import { Link } from 'react-router-dom';
import Phone from '../Shared/Phone';

const Service = ({s}) => {

    const {_id, image, price, rooms, furnished, category, male, sqft} = s

    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
                src={image}
                className="object-cover w-full h-48"
                alt=""
            />
            <div className="p-5 border border-t-0">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <span className="text-gray-600">Price—{price}</span>
                </p>
                <a
                    href="/"
                    aria-label="Category"
                    title="Visit the East"
                    className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-purple-700"
                >
                    {sqft} sqft
                </a>
                <p className="mb-2 text-gray-700">
                    Rooms: {rooms}
                </p>
                <p className="mb-2 text-gray-700">
                    Furnished: {furnished? "Yes": "No"}
                </p>
                <p className="mb-2 text-gray-700">
                    Category: {category}
                </p>
                <p className="mb-2 text-gray-700">
                    Type: {male? "Male": "Female"}
                </p>
                <Phone></Phone>
                <Link to={`/courses/${_id}`}
                    aria-label=""
                    className="inline-flex ml-2 md:ml-0 items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-800"
                >
                    Learn more
                </Link>
            </div>
        </div>
    );
};

export default Service;