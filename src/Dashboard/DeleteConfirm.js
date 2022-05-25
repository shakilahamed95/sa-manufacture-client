import React from 'react';

const DeleteConfirm = ({ deleting, handleDelete, email, }) => {
    return (
        <div>
            <input type="checkbox" id="delete-confirm" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to cancel?</h3>
                    <p className="py-4">If you Cancel You will not get the order</p>
                    <div className="modal-action">
                        <button onClick={() => handleDelete(email)} className="btn btn-sm ">Cancel</button>
                        <label for="delete-confirm" className="btn btn-sm">No</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirm;