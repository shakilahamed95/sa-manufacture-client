import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Purshes = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams()
    const [tooldetails, setTooldetails] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/tools/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTooldetails(data))

    }, [tooldetails])

    const handlePurses = event => {
        event.preventDefault();
        const tool = event.target.quantity.value;
        const toolsnumber = parseInt(tool)
        const order = {
            productId: tooldetails._id,
            name: tooldetails.name,
            userName: user.displayName,
            email: user.email,
            address: event.target.address.value,
            phone: event.target.phone.value,
            tool: event.target.quantity.value,
            totalMoney: toolsnumber * tooldetails.price

        }
        // console.log(totalMoney);
        if (tool < tooldetails.minimum) {
            return toast(`you must order minimum ${tooldetails.minimum} set`)

        }
        else if (tool > tooldetails.quantity) {

            return toast('Sorry we do not have available quantity please order less quantity')
        }
        else {
            fetch('http://localhost:5000/orders', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {
                    event.target.reset();
                    toast.success("Your order has been booked. Please pay for further process")
                })
            const { quantity } = tooldetails;
            const orderquantity = (event.target.quantity.value)
            const orderquantityNumber = parseInt(orderquantity)
            let newQuantity = (quantity) - orderquantityNumber
            const updatedQuantity = { ...tooldetails, quantity: newQuantity }
            setTooldetails(updatedQuantity)
            const url = `http://localhost:5000/tools/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedQuantity)
            })
                .then(res => res.json())
                .then(data => {
                })
        }


    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='mx-12 mt-6 flex justify-center gap-6 items-center my-6'>
                <div class="card card-compact lg:max-w-lg bg-base-100 shadow-xl">
                    <figure><img style={{ width: "300px", height: "300px" }} src={tooldetails.img} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="text-primary text-center text-3xl">{tooldetails.name}</h2>
                        <p>{tooldetails.description}</p>
                        <h3 className='text-xl'> Price Tk:{tooldetails.price}</h3>
                        <h3 className='text-xl'> Available:{tooldetails.quantity}</h3>
                        <h3 className='text-xl'>Minimum Order:{tooldetails.minimum}</h3>
                        <form onSubmit={handlePurses} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                            <input type="text" name='name' disabled value={user?.displayName} class="input input-bordered w-full max-w-xs" />
                            <input type="text" name='email' disabled value={user?.email} class="input input-bordered w-full max-w-xs" />
                            <input type="text" name='address' placeholder="Please enter your address" class="input input-bordered w-full max-w-xs" />
                            <input type="text" name='phone' placeholder=" Your phone number" class="input input-bordered w-full max-w-xs" />
                            <input type="text" name='quantity' placeholder=" Enter your quantity" class="input input-bordered w-full max-w-xs" />
                            <br />
                            <input className='btn btn-primary' type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Purshes;