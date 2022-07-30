import React from 'react';
import './Summery.css'

const Summery = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 h-40 summery'>
            <div className='flex items-center justify-center'>
                <div>
                    <i class="fas fa-gift text-4xl" style={{ color: '#004DDC' }}></i>
                </div>
                <div className='ml-5'>
                    <h1 className='text-xl'>Free Shipping</h1>
                    <p>For all oders over $999</p>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <div>
                    <i class="fas fa-exchange text-4xl" style={{ color: '#004DDC' }}></i>
                </div>
                <div className='ml-5'>
                    <h1 className='text-xl'>Free Return</h1>
                    <p>Free Return within 7 days</p>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <div>
                    <i class="fas fa-shield text-4xl" style={{ color: '#004DDC' }}></i>
                </div>
                <div className='ml-5'>
                    <h1 className='text-xl'>Secure Payment</h1>
                    <p>100% secure payment</p>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <div>
                    <i class="fas fa-headset text-4xl" style={{ color: '#004DDC' }}></i>
                </div>
                <div className='ml-5'>
                    <h1 className='text-xl'>24/7 Support</h1>
                    <p>Online top quality support</p>
                </div>
            </div>
        </div>
    );
};

export default Summery;