import React, { useEffect, useState } from 'react'
import { Card, CardContent, Typography, Avatar, Box, Grid, CardMedia, CardActions, Button, Grid2 } from '@mui/material';
import axiosInstance from '../Axiosinterceptors';
import { useNavigate } from 'react-router-dom';

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

{/* <Grid container spacing={3} sx={{ marginTop: 8 }}>
      {employee.map((employee) => (
        <Grid item xs={12} sm={6} md={4} key={employee.employeeId}>
          <Card sx={{ width: 400, height: 700, marginLeft: 2 }}>
            <CardMedia
              component="img"
              height="300"
              image={employee.profileImage}  // Replace with actual employee profile image URL
              alt={employee.employeeName}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {employee.employeeName}
              </Typography>

              <Typography variant="body2" color="black">
                <h4>Location: {employee.employeeLocation}</h4>
              </Typography>
              
              <Typography variant="body2" color="black">
                <h4>Designation: {employee.employeedesignation}</h4>
              </Typography>

              <Typography variant="body2" color="text.secondary" gutterBottom>
                Employee ID: {employee.employeeId}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                <h4>Salary: ${employee.employeesalary}</h4>
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                sx={{ backgroundColor: '#4caf50', color: 'white' }}
                onClick={() => { updateEmployee(employee); }}
              >
                Edit
              </Button>
              <Button
                size="small"
                color="secondary"
                sx={{ backgroundColor: 'red', color: 'white' }}
                onClick={() => { deleteEmployee(employee._id); }}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
   */}
    <Nav/>
        <Grid2 container spacing={13} sx={{ padding: 8 }}>
            {employee.map((employee) => (
                <Grid2 item xs={12} sm={13} md={4} key={employee.employeeId}>
                    <Card sx={{ height: '100%',width:200, display: 'flex', flexDirection: 'column' }}>
                        <CardMedia
                            sx={{ height: 150,  display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center' }}
                            image={employee.employeeImage}
                            title={employee.employeeName}
                        />
                        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 700}}>
                                {employee.employeeName}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                               Designation: {employee.employeeDesignation}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                                 Salary: {employee.employeeSalary} 
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                                Department: {employee.employeeDepartment}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                                Location: {employee.employeeLocation}
                            </Typography>
                            <Button variant="contained" sx={{ backgroundColor:'#F95454'}}  onClick={() => handleDelete(employee._id)}>DELETE</Button>
                            <Button variant="contained" onClick={() => handleUpdate(employee)}>EDIT</Button>


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