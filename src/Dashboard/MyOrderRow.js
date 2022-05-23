import React from 'react';

const MyOrderRow = ({ order, index, setDeleting }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order.name}</td>
            <td>{order.tool}</td>
            <td>{order.totalMoney}</td>
            <td>
                <label onClick={() => setDeleting(order)} for="delete-confirm" class="btn modal-button">Delete Order</label>
               </td>
        </tr>
    );
};

export default MyOrderRow;