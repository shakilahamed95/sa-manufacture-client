import React from 'react';

const ManageSingleOrder = ({ order, index }) => {
    const { userName, name, totalMoney, paid } = order;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{userName}</td>
            <td>{name}</td>
            <td>{totalMoney}</td>
            <td>{paid ? <p className='text-blue-500 '>Paid</p> : <p className='text-red-500 '>Unpaid</p>}</td>
        </tr>
    );
};

export default ManageSingleOrder;