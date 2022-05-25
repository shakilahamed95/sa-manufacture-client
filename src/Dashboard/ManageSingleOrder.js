import React from 'react';

const ManageSingleOrder = ({ order, index }) => {
    const { userName, name, status, paid } = order;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{userName}</td>
            <td>{name}</td>
            <td>{status ? <p className='text-blue-500 '>{status}</p> : <p className='text-red-500 '>Unpaid</p>}</td>
            <td>to</td>
        </tr>
    );
};

export default ManageSingleOrder;