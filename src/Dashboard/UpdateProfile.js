import React from 'react';

const UpdateProfile = ({ user, singleuser }) => {
    return (
        <div >
            <h1 className='text-2xl text-center mr-12 text-primary mb-6'>Your Profile</h1>
            <div class="card lg:max-w-lg md:max-w-md bg-base-100 shadow-xl">
                {
                    singleuser.img ?
                        <>
                            <figure class="px-10 pt-10">
                                <img src={singleuser.img} alt="Shoes" class="rounded-xl" />
                            </figure>
                        </> :
                        ''
                }
                <div class="card-body items-center text-center">
                    <h2 className='text-2xl text-black'>Your Name:{user.displayName}</h2>
                    <h2 className='text-2xl text-black'>Your Email:{user.email}</h2>

                    {
                        singleuser.phone ? <><h2 className='text-2xl text-black'>Phone number:{singleuser.phone}</h2></> : ''
                    }
                    {
                        singleuser.education ? <><h2 className='text-2xl text-black'>Education:{singleuser.education}</h2></> : ''
                    }
                    {
                        singleuser.linkdin ? <><h2 className='text-2xl text-black'>Linkdin profile:{singleuser.linkdin}</h2></> : ''
                    }
                    {
                        singleuser.location ? <><h2 className='text-2xl text-black'>Location:{singleuser.location}</h2></> : ''
                    }
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;