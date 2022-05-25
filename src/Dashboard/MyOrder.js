import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import DeleteConfirm from './DeleteConfirm';
import MyOrderRow from './MyOrderRow';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([])
    const email = user.email;
    const [deleting, setDeleting] = useState(null)

    const handleDelete = email => {
        fetch(`https://powerful-sands-85071.herokuapp.com/orders/${email}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setDeleting(null)
                    toast.success('You have Successfully Deleted an item')
                }
            })

    }
    useEffect(() => {
        if (user) {
            fetch(`https://powerful-sands-85071.herokuapp.com/orders?email=${email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user, handleDelete])

    return (
        <div>
            <h1 className='text-2xl text-primary'> You Have {orders.length} Orders</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Ordered quantity</th>
                            <th>Total Price</th>
                            <th>Payment Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <MyOrderRow
                                index={index}
                                order={order}
                                setDeleting={setDeleting}
                            ></MyOrderRow>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deleting && <DeleteConfirm
                    deleting={deleting}
                    handleDelete={handleDelete}
                    email={email}
                ></DeleteConfirm>
            }
        </div>
    );
};

export default MyOrder;