import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import Banner from './Banner/Banner';
import Experts from './Experts';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Experts></Experts>
            <Footer></Footer>
        </div>
    );
};

export default Home;