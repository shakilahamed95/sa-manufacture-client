import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderRow = ({ order, index, setDeleting }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order.name}</td>
            <td>{order.tool}</td>
            <td>{order.totalMoney}</td>
            <td>
                {!order.paid && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-primary btn-xs'> Pay</button></Link>}
                {order.paid && <span className='text-primary'>Paid</span>}
            </td>
            <td>
                <label onClick={() => setDeleting(order)} for="delete-confirm" class="btn modal-button">Delete Order</label>
            </td>
        </tr>
    );
};

export default MyOrderRow;