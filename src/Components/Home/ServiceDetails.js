import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {

    const { id } = useParams()

    const [course, setCourse] = useState({})

    const { image, price, rooms, furnished, category, male, sqft } = course

    useEffect(() => {
        fetch(`http://localhost:5000/flats/${id}`)
            .then(res => res.json())
            .then(result => setCourse(result))
    }, [id])

    return (
        <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
            <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
                                New Collaboration
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Area: {sqft}sqft
                        </h2>
                        <p className="text-base text-gray-800 font-bold md:text-lg">
                            No. of Rooms: {rooms}
                        </p>
                        <p className="text-base text-gray-700 font-bold md:text-lg">
                            Furnished: {furnished ? "Yes" : "No"}
                        </p>
                        <p className="text-base text-gray-700 md:text-lg">
                            Category: {category}
                        </p>
                        <p className="text-base text-gray-700 md:text-lg">
                            Type: {male ? "Male" : "Female"}
                        </p>
                        <p className="text-base text-gray-700 md:text-lg">
                            Price : {price}
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:flex-row">
                        <p
                            className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                        >
                            Contact Seller
                        </p>
                    </div>
                </div>
            </div>
            <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                <img
                    className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
                    src={image}
                    alt=""
                />
            </div>
        </div>
    );
};

export default ServiceDetails;