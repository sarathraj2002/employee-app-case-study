import React from 'react'

const PrivateRoutes = () => {
    const token=localstorage.getitem("token");
    let verifyUser=false
    if (token) {
        verifyUser=true
    }
  return (
   
  )
}

export default PrivateRoutes