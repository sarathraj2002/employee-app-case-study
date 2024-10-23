import React, { useEffect, useState } from 'react'
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import axiosInstance from '../Axiosinterceptors';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const[employees,setEmployees]=useState([]);
        useEffect(()=>{
            axiosInstance.get('http://localhost:3000/basic/employee').then((res)=>{
                setEmployees(res.data)
            })
        },[])

        let deleteEmployee=(e)=>{
            axiosInstance.delete('http://localhost:3000/basic/delete/'+p).then((res)=>{
                alert('deleted');
                window.location.reload();
            })
        }

const navigate=useNavigate()
function updateEmployee(employee) {
    navigate('/add',{state:{employee}})
    
}        
  return (
    <>


  </>
  )
}

export default Home