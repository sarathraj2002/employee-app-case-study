import React from 'react'
import { Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    const token=localstorage.getitem("token");
    let verifyUser=false
    if (token) {
        verifyUser=true
    }
  return (
   verifyUser?<Outlet/>
  )
}

export default PrivateRoutes