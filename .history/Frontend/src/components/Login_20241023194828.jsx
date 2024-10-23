import React from 'react'
import  { useState } from 'react'
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

    
    
    const Login = () => {
        const[user,setUser]=useState({
              Username:'',
              Password:''
             
    })
    const navigate=useNavigate()
     
    let updateUser=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    
    let sendData=()=>{
    
    axios.post("http://localhost:3000/user/login",user).then((res)=>{
      
        console.log(res)
        alert(res.data.message)
      if(res.data.usertoken){
        localStorage.setItem("token",res.data.usertoken);
        navigate('/Home')
      }
    })
}
      return (
       <>
        
      
        <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        
        padding: 3,
      }}
    >




<h2 style={{
  marginBottom: '24px',
  fontSize: '2rem',
  fontWeight: 'bold',
  background: 'linear-gradient(90deg, #6200ea, #03dac6)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textAlign: 'center',
  letterSpacing: '2px',
}}>
  NEW LOGIN
</h2>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'white',
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          width: '100%',
          maxWidth: '400px',
        }}
      >
          <TextField
            helperText="Please enter your name"
            id="standard-basic"
            label="Username"
            type="Username"
            name="Username"
            value={user.Username}
            onChange={updateUser}
            sx={{ mb: 2 }}
            /><br/>
    
          <TextField
            helperText="Enter a valid Password "
            id="standard-basic"
            label="Password"
             type="Password"
            name="Password"
            value={user.Password}
            onChange={updateUser}/><br/>

            
         
    
    
          <Button onClick={sendData} variant="contained" sx={{width: '100%',py: 1.5,bgcolor: '#6200ea',':hover': { bgcolor: '#3700b3' },}}>LOGIN</Button>
        </Box>
        </Box>
        </>
      );
    }

    
    
    export default Login;
