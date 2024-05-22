import React from 'react'
import { useSelector } from 'react-redux';
import {Outlet,Navigate} from "react-router-dom";


const PrivateRaute = () => {
  const {currentUser} = useSelector((state)=>state.User);
  return currentUser ? <Outlet/>:<Navigate to="/signin"/>
}

export default PrivateRaute






