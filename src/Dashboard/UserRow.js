import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index }) => {
    const { email, role } = user
    const makeAdmin = () => {
        fetch(`https://sa-manufacture-server-4jap.onrender.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`You have made a new admin`);
                }

            })
    }
    return (

        <tr>
            <td>{index + 1}</td>
            <td>{email}</td>
            <td>{role == 'admin' ? <p>Admin </p> : <button onClick={makeAdmin} className="btn btn-xs btn-neutral">Make Admin</button>}</td>
        </tr>

    );
};

export default UserRow;