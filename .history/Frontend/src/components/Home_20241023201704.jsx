import React, { useEffect, useState } from 'react'
import { Card, CardContent, Typography, Avatar, Box, Grid, CardMedia, CardActions, Button, Grid2 } from '@mui/material';
import axiosInstance from '../Axiosinterceptors';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';

const Home = () => {
    const[employee,setEmployee]=useState([]);
        useEffect(()=>{
            axiosInstance.get('http://localhost:3000/basic/employee').then((res)=>{
                setEmployee(res.data)
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

    <Nav/>
        <Grid2 container spacing={13} sx={{ padding: 8 }}>
            {employee.map((employee) => (
                <Grid2 item xs={12} sm={13} md={4} key={employee.EmployeeId}>
                    <Card sx={{ height: '100%',width:200, display: 'flex', flexDirection: 'column' }}>
                        <CardMedia
                            sx={{ height: 150,  display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center' }}
                            image={employee.EmployeeImage}
                            title={employee.EmployeeName}
                        />
                        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 700}}>
                                {employee.EmployeeName}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                               Designation: {employee.Designation}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                                 Salary: {employee.Salary} 
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                                Department: {employee.Department}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                                Location: {employee.Location}
                            </Typography>
                            <Button variant="contained" sx={{ backgroundColor:'#F95454'}}  onClick={() => deleteEmployee(employee._id)}>DELETE</Button>
                            <Button variant="contained" onClick={() => up(employee)}>EDIT</Button>


                        </CardContent>
                        <CardActions>
                           
                        </CardActions>
                    </Card>
                </Grid2>
            ))}
        </Grid2>   
  </>
  )
}

export default Home