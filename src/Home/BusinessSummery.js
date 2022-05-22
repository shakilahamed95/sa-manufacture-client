import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import customer from '../Images/business/customer.png'
import country from '../Images/business/country.jpg'
import happy from '../Images/business/happy.jpg'
import annual from '../Images/business/annual.png'

const BusinessSummery = () => {
    useEffect(() => {
        AOS.init();
    })
    return (
        <div>
            <h1 className='text-center text-primary text-3xl my-6'>Business Summery</h1>
            <div className='mx-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
                <div className='card lg:card-side bg-emerald-100 shadow-xl' data-aos='fade-right'
                    data-aos-duration='1000'
                    data-aos-delay='200'>
                    <div class="avatar">
                        <div class="w-24 rounded-xl">
                            <img src={customer} alt='' />
                        </div>
                    </div>
                    <div className="card-body text-black">
                        <h2 className="text-2xl text-center ">We Have</h2>
                        <h2 className="text-2xl text-center">3500 Happy Customer</h2>

                    </div>
                </div>
                <div className='card lg:card-side shadow-xl  bg-emerald-100' data-aos='fade-down'
                    data-aos-duration='1000'
                    data-aos-delay='200'>
                    <div class="avatar">
                        <div class="w-24 rounded-xl">
                            <img src={country} alt='' />
                        </div>
                    </div>
                    <div className="card-body text-black">
                        <h2 className="text-2xl text-center">We Reach in </h2>
                        <h2 className="text-2xl text-center">37 Different Country</h2>

                    </div>
                </div>
                <div className='card lg:card-side bg-emerald-100 shadow-xl' data-aos='fade-up'
                    data-aos-duration='1000'
                    data-aos-delay='600'>
                    <div class="avatar">
                        <div class="w-24 rounded-xl">
                            <img src={happy} alt='' />
                        </div>
                    </div>
                    <div className="card-body text-black">
                        <h2 className="text-2xl text-center">We Provide</h2>
                        <h2 className="text-2xl text-center"> 24/7 Customer Support</h2>

                    </div>
                </div>
                <div className='card lg:card-side bg-emerald-100 shadow-xl' data-aos='fade-left'
                    data-aos-duration='1000'
                    data-aos-delay='800'>
                    <div class="avatar">
                        <div class="w-24 rounded-xl">
                            <img src={annual} alt='' />
                        </div>
                    </div>
                    <div className="card-body text-black">
                        <h2 className="text-2xl text-center ">Our Annual Revenue</h2>
                        <h2 className="text-2xl text-center ">330K+</h2>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default BusinessSummery;