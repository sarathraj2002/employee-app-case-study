import React, { useEffect, useState } from 'react'
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';

const Home = () => {
    const[employee,setEmployee]=useState([]);
        useEffect(()=>{
            axios.get('http://localhost:3000/basic/').then((res)=>{
                setEmployee(res.data)
            })
        },[])
  return (
    <>

   
  


  </>
  )
}

export default Home