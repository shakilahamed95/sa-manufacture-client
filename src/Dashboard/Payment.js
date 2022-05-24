import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L0X15GM6Ak3ZGCwHJueygHsNS8zU2tNGTzUADgYJxyOJ8K2IVMSd1GhCyh78sgD56fOjJ1eEYheGvaPp4MO8f8300vhTvgfGT');

const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/orders/${id}`
    const [order, setOrder] = useState({})
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])



    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title text-primary "> Hellow {order.userName} you are paying for{order.name}</h2>
                    <h3 className='text-2xl '> Your order amount:{order.tool}</h3>
                    <h3 className='text-2xl  mb-10'> Total Amount to pay:{order.totalMoney}</h3>
                    <div class="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            order={order}
                        ></CheckoutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;