import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/purchase')
    }
    return (
        <div className='background-img object-cover flex items-center justify-center text-white font-bold font-serif container'>
            <div>
                <h1 data-aos='fade-up'
                    data-aos-duration='2000'
                    data-aos-delay='200' className='text-3xl hover:text-violet-600'>We Believe In</h1>
                <h2 data-aos='fade-up'
                    data-aos-duration='2000'
                    data-aos-delay='600'
                    className='text-2xl hover:text-violet-600'>Best Quality &</h2>
                <h2 data-aos='fade-up'
                    data-aos-duration='2000'
                    data-aos-delay='1000'
                    className='text-2xl hover:text-violet-600'>Best Support</h2>
                <button data-aos='fade-up'
                    onClick={handleNavigate}
                    data-aos-delay='2000' className='btn bg-gradient-to-r from-cyan-500 to-blue-500 mt-10 text-white '>Explore Tools</button>
            </div>

        </div>
    );
};

export default Banner;