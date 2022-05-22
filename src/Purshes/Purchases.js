import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purshes = () => {
    const { id } = useParams()
    const [tooldetails, setTooldetails] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/tools/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTooldetails(data))

    }, [tooldetails])
    return (
        <div className='mx-12 mt-6 flex justify-center gap-6 items-center'>
            <div class="card card-compact lg:max-w-lg bg-base-100 shadow-xl">
                <figure><img style={{ width: "300px", height: "300px" }} src={tooldetails.img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="text-primary text-center text-3xl">{tooldetails.name}</h2>
                    <p>{tooldetails.description}</p>
                    <h3 className='text-xl'> Price Tk:{tooldetails.price}</h3>
                    <h3 className='text-xl'> Available:{tooldetails.quantity}</h3>
                    <h3 className='text-xl'>Minimum Order:{tooldetails.minimum}</h3>
                    <div class="card-actions justify-center">
                    </div>
                </div>
            </div>
            <div>
                <div class="card card-compact lg:max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <input type="text" name='name' placeholder="Please enter your name" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='email' placeholder="Please enter your email" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='address' placeholder="Please enter your address" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder=" Your phone number" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='quantity' placeholder=" Enter your quantity" class="input input-bordered w-full max-w-xs" />
                        <button class="btn btn-primary">Complete purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purshes;