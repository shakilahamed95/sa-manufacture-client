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
import ImageBanner from './ImageBanner/ImageBanner';
import Summery from './Summery/Summery';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Summery></Summery>
            <AboutUs></AboutUs>
            <Experts></Experts>
            <ImageBanner></ImageBanner>
            <Alltools></Alltools>
            <BusinessSummery></BusinessSummery>
            <AllReview></AllReview>
            <GetUpdate></GetUpdate>
            <Footer></Footer>
        </div>
    );
};

export default Home;