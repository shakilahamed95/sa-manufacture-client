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
            <div className="hero-content flex-col lg:flex-row-reverse items-center justify-center">
                <img src={about} className="max-w-sm rounded-lg shadow-2xl lg:mr-20" alt='' />
                <div>
                    <h1 className="py-6 text-black text-xl">Our product portfolio is comprised of the most trusted brands and we offering the finest customer service. We offer top quality products at reasonable prices, provide unparalleled technical assistance, and back it all up with outstanding customer support.</h1>
                    <button onClick={handleNavigate}
                        className='btn bg-neutral text-white'>Explore Tools</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;