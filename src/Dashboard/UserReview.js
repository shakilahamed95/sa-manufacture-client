import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const UserReview = () => {
    const [ratingerror, setRatingError] = useState('')
    const [user] = useAuthState(auth)
    const handleReview = event => {
        event.preventDefault();
        const ratingvalue = event.target.rating.value;
        if (ratingvalue <= 0) {
            setRatingError("please provide a number grater then 0")
        }
        else if (ratingvalue >= 5) {
            setRatingError("please provide a number smaller then 5")
        }
        else {
            const review = {
                user: event.target.name.value,
                text: event.target.text.value,
                ratings: event.target.rating.value,
                image: event.target.image.value
            }
            fetch('http://localhost:5000/review', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(review)
            })
                .then(res => res.json())
                .then(data => {
                    toast("You have successfully added a comment")
                    event.target.reset();
                })

        }
    }
    return (
        <div>
            <h1 className='text-primary text-center text-2xl'>Please Give A review</h1>
            <div className='flex justify-center items-center'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <form onSubmit={handleReview} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                            <input type="text" name='name' disabled value={user?.displayName} class="input input-bordered w-full max-w-xs" />
                            <input type="text" name='email' disabled value={user?.email} class="input input-bordered w-full max-w-xs" />
                            <input type="number" name='rating' placeholder="Please enter your rating value from 1 to 5" class="input input-bordered w-full max-w-xs" />
                            {
                                ratingerror ? <p className='text-red-500'>{ratingerror}</p> : ''
                            }
                            <input type="text" name='image' placeholder=" Enter your image url" class="input input-bordered w-full max-w-xs" />
                            <textarea
                                className='textarea input-bordered w-full max-w-xs'
                                name='text'
                                placeholder='Your message'
                                rows={5}
                            ></textarea>
                            <br />
                            <button class="btn btn-outline btn-primary">submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserReview;