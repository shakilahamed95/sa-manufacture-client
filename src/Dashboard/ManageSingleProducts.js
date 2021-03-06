import React from 'react';


const ManageSingleProducts = ({ tool, index, setAdminDelete }) => {
    const { name, quantity, price } = tool

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                <label onClick={() => setAdminDelete(tool)} for="admin-delete" className="btn btn-sm btn-neutral">Delete</label>
            </td>
        </tr>
    );
};

export default ManageSingleProducts;