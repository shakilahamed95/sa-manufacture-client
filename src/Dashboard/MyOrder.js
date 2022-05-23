import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([])
    const email = user.email;

    const handleDelete = email => {
        fetch(`http://localhost:5000/orders/${email}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('You have Successfully Deleted an item')
                }
            })

    }
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?email=${email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user, handleDelete])

    return (
        <div>
            <h1 className='text-2xl text-primary'> You Have {orders.length} Orders</h1>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Ordered quantity</th>
                            <th>Total Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.tool}</td>
                                <td>{order.totalMoney}</td>
                                <td><button onClick={() => handleDelete(email)} class="btn btn-sm ">Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;