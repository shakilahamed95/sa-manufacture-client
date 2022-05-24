import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const handleAddproduct = event => {
        event.preventDefault();
        const tool = {
            name: event.target.name.value,
            price: event.target.price.value,
            minimum: event.target.minimum.value,
            quantity: event.target.quantity.value,
            description: event.target.text.value,
            img: event.target.image.value
        }
        fetch('http://localhost:5000/tools', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(tool)
        })
            .then(res => res.json())
            .then(data => {
                toast("You have successfully added a new tool")
                event.target.reset();
            })

    }
    return (
        <div>
            <h1 className='text-primary text-center text-2xl'>Add New Tool</h1>
            <div className='flex justify-center items-center'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <form onSubmit={handleAddproduct} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                            <input type="text" name='name' placeholder=" Enter tool name" class="input input-bordered w-full max-w-xs" />
                            <input type="text" name='price' placeholder=" Enter tool price" class="input input-bordered w-full max-w-xs" />
                            <input type="text" name='quantity' placeholder="Enter available quantity" class="input input-bordered w-full max-w-xs" />
                            <input type="text" name='minimum' placeholder="Enter minimum order quantity" class="input input-bordered w-full max-w-xs" />
                            <input type="text" name='image' placeholder=" Enter tool image url" class="input input-bordered w-full max-w-xs" />
                            <textarea
                                className='textarea input-bordered w-full max-w-xs'
                                name='text'
                                placeholder='Enter tool description'
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

export default AddProduct;