import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import UpdateProfile from './UpdateProfile';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const email = user.email;
    const [singleuser, setSingleuser] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/user/${email}`)
            .then(res => res.json())
            .then(data => setSingleuser(data))
    }, [singleuser])


    const handleUpdateUser = event => {
        event.preventDefault();
        const education = event.target.education.value;
        const location = event.target.location.value;
        const phone = event.target.phone.value;
        const linkdin = event.target.linkdin.value;
        const img = event.target.image.value;
        const updatedUser = { education: education, location: location, phone: phone, linkdin: linkdin, img: img }

        // send data to the server
        const url = `http://localhost:5000/user/updateprofile/${email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)

        })
            .then(res => res.json())
            .then(data => {
                setSingleuser(data)
                toast("Your information have been updated successfully")
                event.target.reset()
            })
    }



    return (
        <div className='mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            <div>
                <UpdateProfile
                    singleuser={singleuser}
                    user={user}
                ></UpdateProfile>
            </div>
            <div className='card lg:max-w-lg md:max-w-md bg-base-100 shadow-xl'>
                <h1 className='text-primary text-center text-2xl'>Update Your Profile {user.displayName}</h1>
                <form onSubmit={handleUpdateUser} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                    <input type="text" name='education' placeholder=" Enter your education level" class="input input-bordered w-full max-w-xs" />
                    <input type="text" name='location' placeholder=" Enter your location" class="input input-bordered w-full max-w-xs" />
                    <input type="text" name='phone' placeholder="Enter your phone number" class="input input-bordered w-full max-w-xs" />
                    <input type="text" name='linkdin' placeholder="Enter your LinkedIn profile link" class="input input-bordered w-full max-w-xs" />
                    <input type="text" name='image' placeholder=" Enter your image url" class="input input-bordered w-full max-w-xs" />
                    <br />
                    <button class="btn btn-outline btn-primary">submit</button>
                </form>
            </div>

        </div>

    );
};

export default MyProfile;