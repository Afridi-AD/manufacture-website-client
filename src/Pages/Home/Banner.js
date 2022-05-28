import React from 'react';
import PrimaryBtn from '../Shared/PrimaryBtn';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="https://i.ibb.co/XxV54jr/Car1.jpg" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
                <h1 className="text-5xl font-bold">The famous car tools area !!!!</h1>
                <p className="py-6">Can be very helpful to get in our productCar mechanics reveal the 20 automotive tools they couldn't live without, including a battery-powered impact wrench, an air ratchet, a bolt spinner and an automotive stethoscope.</p>
                <PrimaryBtn>Get Started</PrimaryBtn>
            </div>
        </div>
    </div>
    );
};

export default Banner;