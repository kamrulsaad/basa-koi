import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div
            className="hero min-h-[calc(100vh-68px)]"
            style={{ backgroundImage: "url(assets/Dhaka/img-4.jpg)" }}
        >
            <div className="hero-overlay bg-opacity-60" />
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 data-aos='fade-in' className="mb-5 text-5xl font-bold">Welcome folks</h1>
                    <p className="mb-5">
                        Are you looking for a home to rent inside Dhaka or any other city area? Are you tired of going door to door searching for a place to stay? Well, no more worries. We are here to provide you the best solution.
                    </p>
                    <Link to='/login' className="btn btn-primary">Get Started</Link>
                </div>
            </div>
        </div>

    );
};

export default Header;