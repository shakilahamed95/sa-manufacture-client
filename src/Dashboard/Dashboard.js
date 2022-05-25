import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../firebase.init';
import useAdmin from '../hooks/useAdmin';
import useNotAdmin from '../hooks/useNotAdmin';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    const [notAdmin] = useNotAdmin(user)

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <h1 className='text-3xl font-serif text-primary'>Welcome To Your Dashboard</h1>
                    <Outlet></Outlet>
                    <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Sidebar</label>

                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><Link to='/dashboard'>My Profile</Link></li>
                        {
                            notAdmin && <>
                                <li><Link to='/dashboard/review'>Add Review</Link></li>
                                <li><Link to='/dashboard/myorder'>My Order</Link></li>
                            </>
                        }
                        {
                            admin && <>
                                <li><Link to='/dashboard/makeadmin'>Make Admin</Link></li>
                                <li><Link to='/dashboard/manageorders'>Manage All Orders</Link></li>
                                <li><Link to='/dashboard/manageproduct'>Manage All Tools</Link></li>
                                <li><Link to='/dashboard/addproduct'>Add New Tool</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;