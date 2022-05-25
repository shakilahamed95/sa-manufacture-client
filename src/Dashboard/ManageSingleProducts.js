import React from 'react';
import { toast } from 'react-toastify';

const ManageSingleProducts = ({ tool, index, setAdminDelete }) => {
    const { name, quantity, price, _id } = tool

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                <label onClick={() => setAdminDelete(tool)} for="admin-delete" class="btn btn-sm">Delete</label>
            </td>
        </tr>
    );
};

export default ManageSingleProducts;