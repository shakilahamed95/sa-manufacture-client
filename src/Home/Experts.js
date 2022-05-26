import React from 'react';
import ceo from '../Images/ceo.jpg'
import manager from '../Images/manager.jpg'
import employee from '../Images/employee.jpg'
import Expert from './Expert';


const Experts = () => {
    return (

        <div className='container lg:mt-[-160px]'>
            <h1 className='text-center text-primary text-3xl mt-10 font-bold'>Our Team Member</h1>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mb-20 '>
                    <Expert name='Eng Omar yeamin' post='CEO & Founder' img={ceo}></Expert>
                    <Expert name='Eng Adam Meir' post='Production Manager' img={manager}></Expert>
                    <Expert name='Eng Jack Farnes' post='Head Mechanics' img={employee}></Expert>
                </div>
            </div>
        </div>
    );
};

export default Experts;