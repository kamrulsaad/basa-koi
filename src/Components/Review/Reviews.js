import React, { useReducer } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import AddReview from './AddReview';
import Testimonials from './Testimonials';

const Reviews = () => {

    const [user] = useAuthState(auth)

    const [ignored, forceUpdate] = useReducer(x=> x+1, 0)

    return (
        <div>
            {
                user && <AddReview forceUpdate={forceUpdate}></AddReview>
            }
            <Testimonials ignored={ignored}></Testimonials>
        </div>
    );
};

export default Reviews;