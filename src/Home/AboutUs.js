import React from 'react';
import { useNavigate } from 'react-router-dom';
import about from '../Images/about.jpg'

const AboutUs = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/purchase')
    }
    return (
        <div className="hero min-h-screen  lg:mt-[-100px] ">
            <div className="hero-content flex-col lg:flex-row items-center justify-center">
                <img src={about} className="max-w-sm rounded-lg shadow-2xl lg:mr-32" alt='' />
                <div>
                    <h1 className="text-2xl font-bold text-center text-primary">Welcome To</h1>
                    <h1 className="text-3xl font-bold text-center  text-primary">SA Manufacture House</h1>
                    <p className="py-6 text-black text-center">Our product portfolio is comprised of the most trusted brands and we offering the finest customer service. We offer top quality products at reasonable prices, provide unparalleled technical assistance, and back it all up with outstanding customer support.</p>
                    <button onClick={handleNavigate}
                        className='btn bg-gradient-to-r from-cyan-500 to-blue-500 mt-10 text-white lg:ml-80 hover:text-violet-600'>Explore Tools</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;