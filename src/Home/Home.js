import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from './Banner/Banner';
import Experts from './Experts';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Experts></Experts>
        </div>
    );
};

export default Home;