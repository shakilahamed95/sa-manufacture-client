import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users])

    return (
        <div>
            <h1 className='text-primary text-center text-2xl'> We have {users.length} Users</h1>

            <table class="table w-full">

                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Email</th>
                        <th>Make Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <UserRow
                            key={user._id}
                            user={user}
                            index={index}
                        ></UserRow>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Users;