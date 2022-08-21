import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import SmallLoading from '../Shared/SmallLoading'

const CheckoutForm = ({ product }) => {

    const stripe = useStripe()
    const elements = useElements()
    const [success, setSuccess] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [loading, setLoading] = useState(false)

    const [user] = useAuthState(auth)

    const { price } = product

    useEffect(() => {
        if (price) {
            fetch("https://pathshala-server.herokuapp.com/create-payment-intent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ price }),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data?.clientSecret) {
                        setClientSecret(data.clientSecret)
                    }
                });
        }
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true)

        if (!stripe || !elements) {
            setLoading(false)
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            setLoading(false)
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setLoading(false)
            setCardError(error?.message || '')
            return
        }

        setSuccess('')
        setCardError('')
        


        const { paymentIntent, intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName,
                        email: user?.email
                    },
                },
            },
        );


        if (intentError) {
            setSuccess('')
            setCardError(intentError?.message)
        } else {
            setCardError('')
            setSuccess("Congratulations! Your payment has been completed")
            setTransactionId(paymentIntent.id)
        }
        setLoading(false)

    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-sm btn-success mt-2' type="submit" disabled={!stripe || !clientSecret || success}>
                {loading ? <SmallLoading></SmallLoading> : 'Pay'}
            </button>
            {
                cardError && <span className='text-red-500 block text-sm'>{cardError}</span>
            }
            {
                success && 
                <div>
                    <p className='text-green-500'>
                        {success}
                    </p>
                    <p>Your Transaction Id: <span className='font-bold'>{transactionId}</span> </p>
                    <Link className='btn btn-success btn-sm btn-outline mt-2' to='/addReview'>Add a Reviwe of your experience</Link>
                </div>
            }
        </form>
    );
};

export default CheckoutForm;