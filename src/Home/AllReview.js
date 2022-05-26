import React from 'react';
import useReview from '../hooks/useReview';
import SingleReview from './SingleReview';

const AllReview = () => {
    const [reviews] = useReview()
    return (
        <div className='my-12 container'>
            <h1 className='text-primary text-center text-3xl my-6 font-bold '> Our Happy Client Says</h1>
            <div className='mx-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <SingleReview
                        key={review._id}
                        review={review}
                    ></SingleReview>)
                }
            </div>

        </div>
    );
};

export default AllReview;