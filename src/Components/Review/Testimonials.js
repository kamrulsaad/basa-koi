import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReviewCard from './ReviewCard';

const Testimonials = ({home, ignored}) => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://pathshala-server.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => {
            if(home) {
                setReviews(data.slice(0,3))
            }else{
                setReviews(data)
            }
        })
    }, [home, ignored])

    


    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h1 className='text-3xl my-4'>Our Previous Customers say,</h1>
            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
               {
                   reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
               }
            </div>
            {
                home && <Link to='/reviews'><button className='btn btn-outline btn-secondary block mx-auto w-fit mt-4'>
                    See all reviews
                </button>
                </Link>
            }
        </div>
    );
};

export default Testimonials;