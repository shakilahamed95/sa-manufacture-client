import React from 'react';
import ceo from '../Images/ceo.jpg'
import manager from '../Images/manager.jpg'
import employee from '../Images/employee.jpg'
import Expert from './Expert';


const Experts = () => {
    return (

        <div className='container lg:mt-[-140px]'>
            <h1 className='text-center text-primary text-3xl mt-10 font-bold mb-12'>Our Team Member</h1>
            <div className=''>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mb-20 '>
                    <Expert name='Eng Omar yeamin' post='CEO & Founder' img={ceo}></Expert>
                    <Expert name='Eng Adam Kabir Khan' post='Production Manager' img={manager}></Expert>
                    <Expert name='Eng Jacksen Farnes' post='Head Mechanics' img={employee}></Expert>
                </div>
            </div>
        </div>
    );
};

export default Experts;