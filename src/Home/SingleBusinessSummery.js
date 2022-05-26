import React from 'react';

const SingleBusinessSummery = ({ title, img, des }) => {
    return (
        <div>
            <div className='card  bg-base-100 shadow-xl '>
                <figure className='pl-5 pt-5 avatar w-48 '><img className='sm: ml-60 lg:mr-24' src={img} alt="Album" /></figure>
                <div className="card-body text-white">
                    <h2 className="text-2xl text-center text-black ">{title}</h2>
                    <h2 className="text-2xl text-center text-black">{des}</h2>
                </div>
            </div>
        </div>
    );
};

export default SingleBusinessSummery;