import React from 'react';
import ceo from '../Images/ceo.jpg'
import manager from '../Images/manager.jpg'
import employee from '../Images/employee.jpg'


const Experts = () => {
    return (
        <div>
            <h1 className='text-primary text-center text-3xl font-bold my-6 '>Our Team Members</h1>
            <div>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <div class="card lg:max-w-md bg-base-100 shadow-xl">
                        <figure><div class="avatar">
                            <div class="w-48 rounded">
                                <img src={ceo} alt='' />
                            </div>
                        </div></figure>
                        <div class="card-body">
                            <h2 class="text-2xl text-center text-primary">Eng Omar yeamin</h2>
                            <h3 class="text-xl text-center text-primary"> CEO & Founder</h3>
                        </div>
                    </div>
                    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                        <figure><div class="avatar">
                            <div class="w-48 rounded">
                                <img src={employee} alt='' />
                            </div>
                        </div></figure>
                        <div class="card-body">
                            <h2 class="text-2xl text-center text-primary">Eng Adam Meir</h2>
                            <h3 class="text-xl text-center text-primary"> Production Manager</h3>
                        </div>
                    </div>
                    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                        <figure><div class="avatar">
                            <div class="w-48 rounded">
                                <img src={manager} alt='' />
                            </div>
                        </div></figure>
                        <div class="card-body">
                            <h2 class="text-2xl text-center text-primary">Eng Jack Farnes</h2>
                            <h3 class="text-xl text-center text-primary">Lead Mechanics</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Experts;