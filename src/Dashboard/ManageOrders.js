import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageSingleOrder from './ManageSingleOrder';

const ManageOrders = () => {
    const { data: orders, isLoading } = useQuery('allOrder', () => fetch('http://localhost:5000/allorders').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="overflow-x-auto">
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
                            ></ManageSingleOrder>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageOrders;