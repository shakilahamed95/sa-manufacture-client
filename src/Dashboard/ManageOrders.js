import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageSingleOrder from './ManageSingleOrder';
import OrderDeleteConfirmation from './OrderDeleteConfirmation';

const ManageOrders = () => {
    const [deleteOrder, setDeleteOrder] = useState(null)
    const { data: orders, isLoading, refetch } = useQuery('allOrder', () => fetch('http://localhost:5000/allorders').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div>
                <div class="overflow-x-auto">
                    <h1 className='text-3xl text-primary text-center mb-8'>All Orders</h1>
                    <table class="table w-full">

                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Name</th>
                                <th>Product Name</th>
                                <th>Payment</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => <ManageSingleOrder
                                    key={order._id}
                                    order={order}
                                    index={index}
                                    refetch={refetch}
                                    setDeleteOrder={setDeleteOrder}
                                ></ManageSingleOrder>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {
                deleteOrder && <OrderDeleteConfirmation
                    key={deleteOrder._id}
                    deleteOrder={deleteOrder}
                    refetch={refetch}
                    setDeleteOrder={setDeleteOrder}
                ></OrderDeleteConfirmation>
            }
        </div>
    );
};

export default ManageOrders;