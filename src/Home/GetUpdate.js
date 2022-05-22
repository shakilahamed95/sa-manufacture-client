import React from 'react';

const GetUpdate = () => {
    return (
        <div className='bg-primary px-10 py-14 '>
            <div className='text-center pb-14 text-white'>
                <p className='text-xl font-bold text-transparent bg-clip-text '>
                </p>
                <h1 className='text-4xl'>Stay connected And Get All Latest Update</h1>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-5'>
                <input
                    type='text'
                    placeholder='Your Name'
                    className='input w-full max-w-md'
                />
                <input
                    type='text'
                    placeholder='Your Email'
                    className='input w-full max-w-md'
                />
                <textarea
                    className='textarea w-full max-w-md'
                    placeholder='Your message'
                    rows={5}
                ></textarea>
                <button className="btn btn-primary  text-white font-bold bg-primary">Submit</button>
            </div>
        </div>
    );
};

export default GetUpdate;