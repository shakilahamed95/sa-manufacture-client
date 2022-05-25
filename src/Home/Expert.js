import React from 'react';

const Expert = ({ name, post, img }) => {
    return (
        <div className='card bg-base-100 shadow-xl'>
            <figure className='pl-5 pt-5'><img style={{ width: "200px", height: '200px' }} src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">hi</h2>
                <h2 class="text-2xl text-center text-primary">Eng Adam Meir</h2>
                <h3 class="text-xl text-center text-primary"> Production Manager</h3>
            </div>
        </div>
    );
};

export default Expert;