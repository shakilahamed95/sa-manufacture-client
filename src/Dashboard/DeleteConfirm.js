import React from 'react';

const DeleteConfirm = ({ deleting, handleDelete, email, }) => {
    return (
        <div>
            <input type="checkbox" id="delete-confirm" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete?</h3>
                    <p class="py-4">If you delete You will not get the order</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(email)} class="btn btn-sm ">Delete</button>
                        <label for="delete-confirm" class="btn btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirm;