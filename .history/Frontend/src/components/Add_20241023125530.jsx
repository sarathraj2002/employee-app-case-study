import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

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
    const location=useLocation()
    const navigate=useNavigate()
     let sendData=()=>{
        if (location.state!=null){
            axios.put('http:')
        }
     }
  return (
    
  )
}

export default Add