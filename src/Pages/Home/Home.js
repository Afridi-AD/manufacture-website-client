import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Footer from './Footer';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummery></BusinessSummery>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;