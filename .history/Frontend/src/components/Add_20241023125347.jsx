import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

const Add = () => {
    const[employee,setEmployee]=useState({
        EmployeeId:'',
        EmployeeName:'',
        Location:'',
        Designation:'',
        Salary:''
    })
    const fetchValue=(c)=>{
         setEmployee({...employee,[c.target.name]:c.target.value})
    };
    const location=useLocation
  return (
    
  )
}

export default Add