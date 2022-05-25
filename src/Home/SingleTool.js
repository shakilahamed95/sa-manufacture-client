import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleTool = ({ tool }) => {
    const { img, name, minimum, price, quantity, description, _id } = tool
    const navigate = useNavigate()
    const handleNavigate = _id => {
        navigate(`/purchase/${_id}`)
    }
    return (
        <div className="card card-compact lg:max-w-md bg-base-100 shadow-xl">
            <figure><img style={{ width: "250px", height: "250px" }} src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-primary text-center text-3xl">{name}</h2>
                <p>{description}</p>
                <h3 className='text-xl'> Price Tk:{price}</h3>
                <h3 className='text-xl'> Available:{quantity}</h3>
                <h3 className='text-xl'>Minimum Order:{minimum}</h3>
                <div className="card-actions justify-center">
                    <button onClick={() => handleNavigate(_id)} className="btn btn-primary">Purches Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleTool;