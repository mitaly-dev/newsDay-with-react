import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import './Spinner.css'

const PrivateRoute = ({children}) => {
    let location = useLocation()
    const {user,loading}=useContext(AuthContext)

    if(loading){
        return <div className='spinner'>
                    <Spinner animation="border" variant="primary" />
                </div>
    }

    if(user && user?.uid){
       return children
    }

    return <Navigate to="/login" state={{from : location}} replace></Navigate>
};

export default PrivateRoute;