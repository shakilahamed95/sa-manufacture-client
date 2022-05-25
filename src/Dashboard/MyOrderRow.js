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
                {order.paid && <>
                    <span className='text-primary'>Paid</span>
                    <p className='text-primary'>Transaction Id :{order.transactionId}</p>
                </>}
            </td>
            <td>
                {
                    order.paid ? <><button disabled onClick={() => setDeleting(order)} for="delete-confirm" className="btn modal-button">Cancel Order</button></> :
                        <> <label onClick={() => setDeleting(order)} for="delete-confirm" className="btn modal-button">Cancel Order</label></>
                }
            </td>
        </tr>
    );
};

export default MyOrderRow;