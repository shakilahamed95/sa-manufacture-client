import React from 'react';

const SingleReview = ({ review }) => {
    const { user, text, ratings, image } = review;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl image-full">
            <figure><img src={image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="text-center text-2xl">{user}</h2>
                <p>{text}</p>
                <h2 class="text-center text-2xl">{ratings} Stars</h2>
            </div>
        </div>
    );
};

export default SingleReview;