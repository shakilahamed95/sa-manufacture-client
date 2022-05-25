import React from 'react';
import { toast } from 'react-toastify';

const OrderDeleteConfirmation = ({ deleteOrder, refetch, setDeleteOrder }) => {
    const { name, _id } = deleteOrder;

    const handleDelete = () => {
        fetch(`http://localhost:5000/order/${_id}`, {
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
            <input type="checkbox" id="order-delete-confirmation" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are You sure want to delete {name}</h3>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(_id)} class="btn btn-sm">Delete</button>
                        <label for="order-delete-confirmation" class="btn btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDeleteConfirmation;