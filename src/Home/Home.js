import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import AllReview from './AllReview';
import Alltools from './Alltools';
import Banner from './Banner/Banner';
import BusinessSummery from './BusinessSummery';
import Experts from './Experts';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Experts></Experts>
            <Alltools></Alltools>
            <BusinessSummery></BusinessSummery>
            <AllReview></AllReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;