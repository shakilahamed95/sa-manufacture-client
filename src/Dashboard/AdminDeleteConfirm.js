import React from 'react';
import { toast } from 'react-toastify';

const AdminDeleteConfirm = ({ adminDelete, refetch, setAdminDelete }) => {
    const { name, _id } = adminDelete

    const handledelete = id => {
        fetch(`http://localhost:5000/tools/${id}`, {
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
            <input type="checkbox" id="admin-delete" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are You Sure You Want To Delete {name}?</h3>
                    <p class="py-4">If you delete you will lost the product from the home page</p>
                    <div class="modal-action">
                        <button onClick={() => handledelete(_id)} class="btn btn-sm">Delete</button>
                        <label for="admin-delete" class="btn btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AdminDeleteConfirm;