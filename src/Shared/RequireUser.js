import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import Loading from './Loading';
import auth from '../firebase.init';
import useNotAdmin from '../hooks/useNotAdmin';

const RequireUser = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [notAdmin, notadminLoading] = useNotAdmin(user);
    const location = useLocation();

    if (loading || notadminLoading) {
        return <Loading></Loading>
    }

    if (!user || !notAdmin) {
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireUser;