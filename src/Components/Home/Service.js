import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({s}) => {

    const {_id, image, course, price, about, company} = s

    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
                src={image}
                className="object-cover w-full h-48"
                alt=""
            />
            <div className="p-5 border border-t-0">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <a
                        href="/"
                        className="transition-colors duration-200 text-blue-gray-900 hover:text-purple-700"
                        aria-label="Category"
                        title="traveling"
                    >
                        {company}
                    </a>
                    <span className="text-gray-600">— {price}</span>
                </p>
                <a
                    href="/"
                    aria-label="Category"
                    title="Visit the East"
                    className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-purple-700"
                >
                    {course.slice(0,15)}
                </a>
                <p className="mb-2 text-gray-700">
                    {about.slice(0,110)}
                </p>
                <Link to={`/courses/${_id}`}
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-800"
                >
                    Learn more
                </Link>
            </div>
        </div>
    );
};

export default Service;