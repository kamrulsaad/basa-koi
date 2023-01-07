import { Tabs, Tab, TabsHeader } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';
import Service from './Service';

const Services = ({ home }) => {

    const [filter, setFilter] = useState('all')

    const [services, setServices] = useState([])

    const data = [
        {
            label: "All",
            value: "all"
        },
        {
            label: "Flat",
            value: "flat"
        },
        {
            label: "Hostel",
            value: "hostel"
        },

        {
            label: "Sublet",
            value: "sublet",
        }
    ];

    useEffect(() => {
        fetch(`https://basa-koi-server.onrender.com/flats${filter ? `?category=${filter}` : ''}`)
            .then(res => res.json())
            .then(result => setServices(result))
    }, [filter])

    if (services.length === 0) return <Loading></Loading>

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h1 className='text-5xl font-extrabold text-violet-400 text-center mb-5'>Flat Rentals</h1>
            {
                !home &&
                <Tabs className='mb-5 z-0' value="html">
                    <TabsHeader>
                        {data.map(({ label, value }) => (
                            <Tab onClick={() => setFilter(value)} key={value} value={value}>
                                {label}
                            </Tab>
                        ))}
                    </TabsHeader>
                </Tabs>
            }
            <div className="grid gap-8 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full">
                {
                    home ?
                        services.slice(0, 4).map((s, index) => <Service key={index} s={s}></Service>) :
                        services.map((s, index) => <Service key={index} s={s}></Service>)
                }
            </div>
            {
                home && <Link to='/services'><button className='btn btn-outline btn-secondary block mx-auto w-fit mt-4'>
                    See all
                </button>
                </Link>
            }
        </div>
    );
};

export default Services;