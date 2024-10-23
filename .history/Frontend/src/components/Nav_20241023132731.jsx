import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import React from 'react'


const Nav = () => {
  const navigate=useNavigate()
    let clearUser=()=>{
      localStorage.removeItem("token");
      navigate('/')
  }
  

    return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{backgroundColor:'#FFDE4D'}}  >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,color:'black',textAlign:'left' }}>
              <h2> EMPLOYEER</h2>
          </Typography>
       <Link to={'/'}><Button variant='contained' sx={{margin:2}} color="inherit">Home</Button></Link> 
       <Link to={'/add'}><Button variant='contained'  color="inherit">ADD EMPLOYEE</Button></Link> 
      {/* <Link to={'/login'}><Button variant='contained' sx={{margin:2}} color="inherit">LOGIN</Button></Link> */}
      <Link to={'/'}><Button variant='contained'  color="inherit">LOG OUT</Button></Link>
        </Toolbar>
      </AppBar>
      </Box>
    )
  }
  
  export default Nav