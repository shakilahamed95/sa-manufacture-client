import React from 'react';

const SingleReview = ({ review }) => {
    const { user, text, ratings, image } = review;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl h-72">
                <div className="card-body">
                    <div className='flex items-center justify-items-center'>
                        <div className="avatar">
                            <div className="w-24 rounded-full  ">
                                <img src={image} alt='' />
                            </div>
                        </div>
                        <div className='ml-6'>
                            <h1>{user}</h1>
                            <h1>Rating :{ratings} <i className="fas fa-star" style={{ color: "#FEC012" }}></i></h1>
                        </div>
                    </div>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;