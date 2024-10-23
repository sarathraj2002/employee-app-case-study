import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Home = () => {
    
  return (
    <>

import React from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';

// Sample employee data object
const employee = {
  name: 'John Doe',
  position: 'Software Engineer',
  department: 'Engineering',
  email: 'john.doe@example.com',
  avatar: 'https://via.placeholder.com/150', // Placeholder avatar
};

const EmployeeCard = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Card sx={{ width: 300 }}>
        <CardContent>
          <Box display="flex" alignItems="center" mb={2}>
            <Avatar src={employee.avatar} alt={employee.name} sx={{ width: 64, height: 64, marginRight: 2 }} />
            <Box>
              <Typography variant="h6">{employee.name}</Typography>
              <Typography color="text.secondary">{employee.position}</Typography>
            </Box>
          </Box>
          <Typography variant="body2" color="text.secondary">
            Department: {employee.department}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email: {employee.email}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EmployeeCard;


  </>
  )
}

export default Home