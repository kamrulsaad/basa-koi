import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import SmallLoading from '../Shared/SmallLoading';
import { toast } from 'react-toastify';

const Login = () => {

    const [email, setEmail] = useState('')

    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithEmail, emailuser, emailLoading, emailError] = useSignInWithEmailAndPassword(auth)

    const handleSubmit = (e) => {
        e.preventDefault()
        signInWithEmail(email, e.target.password.value);
    }

    useEffect(() => {
        if (user || emailuser) navigate(from, { replace: true })
    }, [user, from, navigate, emailuser])

    if (error) {
        toast.error(error?.message)
    }

    if (emailError) {
        toast.error(emailError?.message)
    }

    return (
        <div className="relative">
            <img
                src="assets/Dhaka/img-1.jpg"
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-75">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                Login today<br className="hidden md:block" />
                                for exciting{' '}
                                <span className="text-teal-400">offers</span>
                            </h2>
                            <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                                Lets wait no more. Dive upon your journey of a new life.
                            </p>
                            <Link to='/register'
                                className="inline-flex items-center cursor-pointer font-semibold tracking-wider transition-colors duration-200 text-teal-400 hover:text-teal-700"
                            >
                                Dont have an account? Register now
                                <svg
                                    className="inline-block w-3 ml-2"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </Link>
                        </div>
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                    Login
                                </h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="firstName"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Email
                                        </label>
                                        <input
                                            placeholder="john.doe@example.org"
                                            required
                                            type="email"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
                                            id="firstName"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="email"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Password
                                        </label>
                                        <input
                                            required
                                            type="password"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
                                            id="email"
                                            name="password"
                                        />
                                    </div>
                                    <div className="mt-4 mb-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                        >
                                            Login
                                            {emailLoading && <SmallLoading></SmallLoading>}
                                        </button>
                                    </div>
                                    <div className="divider">OR</div>
                                    <div onClick={() => signInWithGoogle()} className="flex cursor-pointer justify-center w-full mb-3">
                                        <div
                                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                        >
                                            <div className="flex items-center">
                                                <div className="mr-3 font-semibold text-white">
                                                    Login with Google
                                                </div>
                                                {
                                                    loading ? <SmallLoading></SmallLoading> :
                                                        <svg
                                                            width="24px"
                                                            height="24px"
                                                            viewBox="-2 -2 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            preserveAspectRatio="xMinYMin"
                                                            className="jam jam-google"
                                                        >
                                                            <path d="M4.376 8.068A5.944 5.944 0 0 0 4.056 10c0 .734.132 1.437.376 2.086a5.946 5.946 0 0 0 8.57 3.045h.001a5.96 5.96 0 0 0 2.564-3.043H10.22V8.132h9.605a10.019 10.019 0 0 1-.044 3.956 9.998 9.998 0 0 1-3.52 5.71A9.958 9.958 0 0 1 10 20 9.998 9.998 0 0 1 1.118 5.401 9.998 9.998 0 0 1 10 0c2.426 0 4.651.864 6.383 2.302l-3.24 2.652a5.948 5.948 0 0 0-8.767 3.114z" />
                                                        </svg>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;