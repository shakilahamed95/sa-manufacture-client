import React from 'react';
import { toast } from 'react-toastify';

const AdminDeleteConfirm = ({ adminDelete, refetch, setAdminDelete }) => {
    const { name, _id } = adminDelete

    const handledelete = id => {
        fetch(`https://powerful-sands-85071.herokuapp.com/tools/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('You have Successfully Deleted an item')
                    setAdminDelete(null)
                    refetch()
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="admin-delete" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are You Sure You Want To Delete {name}?</h3>
                    <p className="py-4">If you delete you will lost the product from the home page</p>
                    <div className="modal-action">
                        <button onClick={() => handledelete(_id)} className="btn btn-sm">Delete</button>
                        <label for="admin-delete" className="btn btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AdminDeleteConfirm;