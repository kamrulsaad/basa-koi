import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://pathshala-server.herokuapp.com/courses')
            .then(res => res.json())
            .then(result => setServices(result))
    }, [])

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h1 className='text-5xl font-extrabold text-violet-400 text-center mb-5'>Our Courses</h1>
            <div className="grid gap-8 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full">
                {
                    services.map((s, index) => <Service key={index} s={s}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;