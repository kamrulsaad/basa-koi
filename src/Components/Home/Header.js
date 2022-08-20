import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div
            className="hero min-h-[calc(100vh-68px)]"
            style={{ backgroundImage: "url(assets/1.jpg)" }}
        >
            <div className="hero-overlay bg-opacity-60" />
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">
                        Welcome to the world of learning in a better way. A journey where only obstacle you find is yourself. A better learning platform for your everyday studies.
                    </p>
                    <Link to='/login' className="btn btn-primary">Get Started</Link>
                </div>
            </div>
        </div>

    );
};

export default Header;