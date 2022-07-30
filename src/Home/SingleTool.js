import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleTool = ({ tool }) => {
    const { img, name, minimum, price, quantity, description, _id } = tool
    const navigate = useNavigate()
    const handleNavigate = _id => {
        navigate(`/purchase/${_id}`)
    }
    return (
        <div className="card card-compact lg:max-w-md bg-base-100 shadow-xl ml-6">
            <figure><img style={{ width: "250px", height: "250px" }} src={img} alt="Shoes" /></figure>
            <div className="card-body text-left mt-3 p-3">
                <h2 className=" font-semibold text-primary text-3xl">{name}</h2>
                <p>{description}</p>
                <h3 className='text-2xl '> Price Tk:{price}</h3>
                <h3 className='text-2xl'> Available:{quantity}</h3>
                <h3 className='text-2xl'>Minimum Order:{minimum}</h3>
                <div className="card-actions justify-center mt-2 ">
                    <button onClick={() => handleNavigate(_id)} className="btn btn-neutral">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleTool