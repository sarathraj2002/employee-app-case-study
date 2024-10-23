import React from 'react'

const PrivateRoutes = () => {
    const token=localstorage.getitem("token");
    let verifyUser=false
    if (token) {
        
    }
  return (
    <div>PrivateRoutes</div>
  )
}

export default PrivateRoutes