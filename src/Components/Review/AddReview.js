import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import ReactStars from "react-rating-stars-component";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = ({forceUpdate}) => {

    const [rating, setRating] = useState(0)
    const [user] = useAuthState(auth)
    const date = new Date()

    const ratingChanged = (newRating) => {
        setRating(newRating);
    };

    const handleReviewSubmit = e => {
        e.preventDefault()
        const review = {
            rating,
            comment: e.target.comment.value,
            img: user?.photoURL || 'assets/profile.jpg',
            name: user?.displayName,
            date: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear(),
            hours: date.getHours(),
            minutes: date.getMinutes()
        }

        axios.post('https://basa-koi-server.vercel.app/reviews', review)
            .then(data => {
                if (data.data.acknowledged) {
                    toast.success('Your review is added')
                    forceUpdate()
                }
            })
        e.target.reset()
    }

    return (
        <div className='flex items-center justify-center w-ful'>
            <div className='card bg-base-100 border shadow-xl mt-4'>
                <h1 className='text-center font-semibold text-xl text-primary pt-4'>Please leave your precious review.</h1>
                <form className='card-body ' onSubmit={handleReviewSubmit}>
                    <p className='text-black'>How was your experience with our team?</p>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#0000cd"
                    />
                    <textarea name='comment' className="textarea textarea-bordered w-full mt-3" placeholder="Your Comment"></textarea>
                    <input className='btn btn-outline w-full mt-2' type="submit" value='Comment' />
                </form>
            </div>
        </div>
    );
};

export default AddReview;