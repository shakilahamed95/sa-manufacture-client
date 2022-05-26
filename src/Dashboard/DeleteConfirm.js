import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirm = ({ deleting, email, setDeleting }) => {
    const { _id } = deleting

    const handleDelete = () => {
        fetch(`https://powerful-sands-85071.herokuapp.com/orders/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setDeleting(null)
                    toast.success('You have Successfully Deleted an item')
                }
            })

    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to cancel?</h3>
                    <p className="py-4">If you Cancel You will not get the order</p>
                    <div className="modal-action">
                        <button onClick={() => handleDelete(email)} className="btn btn-sm ">Confirm</button>
                        <label for="delete-confirm" className="btn btn-sm">No</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirm;