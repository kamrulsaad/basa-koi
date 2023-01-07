import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import Loading from '../Shared/Loading'

const stripePromise = loadStripe('pk_test_51L1r5FJbpxxK67O9UoEUiwunZwaeks8km5jZaxEeZnQiP3r8H41mri8pZCjSnCcT9kfB2x29xFvuT7rxEW4GHIgL005mZOEpIM');

const Payment = () => {

    const { id } = useParams()

    const [user, loading] = useAuthState(auth)

    const [product, setProduct] = useState({})

    const { price, sqft, category } = product

    useEffect(() => {
        fetch(`https://basa-koi-server.onrender.com/flats/${id}`)
            .then(res => res.json())
            .then(result => setProduct(result))
    }, [id])

    if (loading) return <Loading></Loading>

    return (
        <div className='flex items-center justify-center w-full'>
            <div className="card  max-w-md bg-base-100 shadow-xl mt-10">
                <div className="card-body items-center text-center">
                    <h1 className='text-center font-bold text-xl underline'>Order Details</h1>
                    <h2 className="card-title capitalize">Hello <span className='text-accent font-bold'>{user.displayName},</span></h2>
                    <p>Please pay for: <span className="capitalize">{sqft} sqft {category}</span></p>
                    <p>Payable Amount: <span className="capitalize">{price}৳ </span></p>
                    <div className='w-full mt-3'>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm product={product} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;