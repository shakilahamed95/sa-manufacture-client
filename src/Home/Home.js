import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import AboutUs from './AboutUs';
import AllReview from './AllReview';
import Alltools from './Alltools';
import Banner from './Banner/Banner';
import BusinessSummery from './BusinessSummery';
import Experts from './Experts';
import GetUpdate from './GetUpdate';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Experts></Experts>
            <Alltools></Alltools>
            <BusinessSummery></BusinessSummery>
            <AllReview></AllReview>
            <GetUpdate></GetUpdate>
            <Footer></Footer>
        </div>
    );
};

export default Home;