import React from 'react';
import happy from '../Images/happy.png'
import country from '../Images/country.png'
import rating from '../Images/rating.png'
import revenue from '../Images/revenue.png'
import SingleBusinessSummery from './SingleBusinessSummery';

const BusinessSummery = () => {
    return (
        <div className='container my-24' data-aos='fade-right'
            data-aos-duration='1000'
            data-aos-delay='200'>
            <h1 className='text-center text-primary text-3xl my-12 font-bold'>Business Summery</h1>
            <div className=' grid sm:min-w-min grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
                <SingleBusinessSummery title='We Have' des='3k+ Happy Customer' img={happy}></SingleBusinessSummery>
                <SingleBusinessSummery title='We Reach in' des='34+ Country' img={country}></SingleBusinessSummery>
                <SingleBusinessSummery title='We Get' des='5k+ Customer Review' img={rating}></SingleBusinessSummery>
                <SingleBusinessSummery title='Our Annual Revenue' des='330K+' img={revenue}></SingleBusinessSummery>
            </div>

        </div>
    );
};

export default BusinessSummery;