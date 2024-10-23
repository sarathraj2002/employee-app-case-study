import React, { useEffect, useState } from 'react'
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import axios from 'axios';
import axiosInstance from '../Axiosinterceptors';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const[employee,setEmployee]=useState([]);
        useEffect(()=>{
            axiosInstance.get('http://localhost:3000/basic/').then((res)=>{
                setEmployee(res.data)
            })
        },[])

        let deleteEmployee=(e)=>{
            axiosInstance.delete('http://localhost:3000/basic/delete/'+p).then((res)=>{
                alert('deleted');
                window.location.reload();
            })
        }

const navigate=useNavigate        
  return (
    <>

<Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Card sx={{ width: 300 }}>
        <CardContent>
          <Box display="flex" alignItems="center" mb={2}>
            <Avatar src={employee.avatar} alt={employee.name} sx={{ width: 64, height: 64, marginRight: 2 }} />
            <Box>
              <Typography variant="h6">{employee.name}</Typography>
              <Typography color="text.secondary">{employee.designation}</Typography>
            </Box>
          </Box>
          <Typography variant="body2" color="text.secondary">
            Location: {employee.location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Salary: ₹{employee.salary}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  


  </>
  )
}

export default Home