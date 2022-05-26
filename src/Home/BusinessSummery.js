
import { useEffect } from 'react';
import customer from '../Images/business/happy.png'
import service from '../Images/business/rating.png'
import country from '../Images/business/country.png'
import annual from '../Images/business/revenue.png'
import SingleBusinessSummery from './SingleBusinessSummery';

const BusinessSummery = () => {
    return (
        <div className='container my-12' data-aos='fade-right'
            data-aos-duration='1000'
            data-aos-delay='200'>
            <h1 className='text-center text-primary text-3xl my-12 font-bold'>Business Summery</h1>
            <div className=' grid sm:min-w-min grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
                <SingleBusinessSummery title='We Have' des='3k+ Happy Customer' img={customer}></SingleBusinessSummery>
                <SingleBusinessSummery title='We Reach in' des='34+ Country' img={country}></SingleBusinessSummery>
                <SingleBusinessSummery title='We Get' des='5k+ Customer Review' img={service}></SingleBusinessSummery>
                <SingleBusinessSummery title='Our Annual Revenue' des='330K+' img={annual}></SingleBusinessSummery>
            </div>

        </div>
    );
};

export default BusinessSummery;