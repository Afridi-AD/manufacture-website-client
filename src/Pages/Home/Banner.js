import React from 'react';
import PrimaryBtn from '../Shared/PrimaryBtn';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="https://i.ibb.co/XxV54jr/Car1.jpg" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
                <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <PrimaryBtn>Get Started</PrimaryBtn>
            </div>
        </div>
    </div>
    );
};

export default Banner;