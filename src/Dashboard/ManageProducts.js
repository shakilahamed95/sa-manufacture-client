import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AdminDeleteConfirm from './AdminDeleteConfirm';
import ManageSingleProducts from './ManageSingleProducts';

const ManageProducts = () => {
    const [adminDelete, setAdminDelete] = useState(null)
    const { data: tools, isLoading, refetch } = useQuery('allproduct', () => fetch('https://sa-manufacture-server-4jap.onrender.com/tools').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Available</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map((tool, index) => <ManageSingleProducts
                                key={tool._id}
                                tool={tool}
                                index={index}
                                setAdminDelete={setAdminDelete}
                            ></ManageSingleProducts>)
                        }
                    </tbody>
                </table>
            </div>
            {
                adminDelete && <AdminDeleteConfirm
                    adminDelete={adminDelete}
                    refetch={refetch}
                    setAdminDelete={setAdminDelete}
                ></AdminDeleteConfirm>
            }
        </div>
    );
};

export default ManageProducts;