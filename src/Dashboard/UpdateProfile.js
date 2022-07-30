import React from 'react';

const UpdateProfile = ({ user, singleuser }) => {
    return (
        <div >
            <h1 className='text-3xl text-center mr-12 text-primary mb-6 mt-12'>Your Profile</h1>
            <div className="card lg:max-w-lg md:max-w-md bg-base-100">
                {
                    singleuser.img ?
                        <>
                            <div className="avatar  flex justify-center items-center">
                                <div className="w-36 rounded-full">
                                    <img src={singleuser.img} alt='' />
                                </div>
                            </div>

                        </> :
                        <>
                            <div className="avatar flex items-center justify-center">
                                <div className="w-32 rounded-full">
                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt='' />
                                </div>
                            </div>
                        </>
                }
                <div className="card-body text-left p-6 mt-6">
                    <h2 className='text-xl text-black'>Name:{user.displayName}</h2>
                    <h2 className='text-xl text-black'>Email:{user.email}</h2>

                    {
                        singleuser.phone ? <><h2 className='text-xl text-black'>Phone:{singleuser.phone}</h2></> : ''
                    }
                    {
                        singleuser.education ? <><h2 className='text-xl text-black'>Education:{singleuser.education}</h2></> : ''
                    }
                    {
                        singleuser.linkdin ? <><h2 className='text-xl text-black'>Linkdin:{singleuser.linkdin}</h2></> : ''
                    }
                    {
                        singleuser.location ? <><h2 className='text-xl text-black'>Location:{singleuser.location}</h2></> : ''
                    }
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;