import React from 'react';
import './Banner.css'
import cover from '../../Images/cover.jpeg'

const Banner = () => {
    return (
        <div className='background-img object-cover flex items-center justify-center text-white font-bold font-serif container'>
            <div>
                <h1 className='text-3xl'>We Believe In</h1>
                <h2 className='text-2xl'>Best Quality &</h2>
                <h2 className='text-2xl'>Best Support</h2>
            </div>

        </div>
    );
};

export default Banner;