import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';


const Navbar = () => {
    const [user] = useAuthState(auth);
    const handleSignout = () => {
        signOut(auth)
        localStorage.removeItem('accessToken')
    }


    const menu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/purchase'>All Product</Link></li>
        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
        {user ?
            <>
                <p className="btn btn-ghost normal-case" onClick={handleSignout} >Log Out</p>
                <li><p>{user.displayName}</p></li>
            </>
            : <li><Link to="/login">Login</Link></li>}
        <li><Link to='/myportfolio'>My Portfolio</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
    </>


    return (
        <div className="navbar bg-base-100 container">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {menu}
                    </ul>
                </div>
                <p className="ml-12 btn btn-ghost hover:bg-white font-bold normal-case text-xl"><p>SA Manufacture House</p></p>
            </div>
            <div className="navbar-end hidden lg:flex ">
                <ul className="menu menu-horizontal p-0">
                    {menu}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;