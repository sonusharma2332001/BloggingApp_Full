import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet,Navigate } from 'react-router-dom';

const AdminRoute = () => {
    const {currentUser} = useSelector((state)=>state.User);
    return currentUser.isAdmin?<Outlet/>:<Navigate to="/"/>
  
}

export default AdminRoute
