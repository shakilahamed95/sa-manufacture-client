import React from 'react';
import { toast } from 'react-toastify';

const OrderDeleteConfirmation = ({ deleteOrder, refetch, setDeleteOrder }) => {
    const { name, _id } = deleteOrder;

    const handleDelete = () => {
        fetch(`https://powerful-sands-85071.herokuapp.com/order/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setDeleteOrder(null)
                    toast.success('You have Successfully Delete a tool')
                    refetch()
                }
            })

    }
    return (
        <div>
            <input type="checkbox" id="order-delete-confirmation " className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are You sure want to delete {name}</h3>
                    <div className="modal-action">
                        <button onClick={() => handleDelete(_id)} className="btn btn-sm">Delete</button>
                        <label for="order-delete-confirmation" className="btn btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default OrderDeleteConfirmation;