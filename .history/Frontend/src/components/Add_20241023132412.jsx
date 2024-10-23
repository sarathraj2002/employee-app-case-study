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
            axios.put('http://localhost:3000/basic/edit/'+location.state.employee._id,employee).then((res)=>{
                alert('Data updated');
                navigate('/')
            }).catch((error)=>{
                console.log(error);
            })
        }else{
            axios.post('http://localhost:3000/basic/addEmployee',employee).then((res)=>{
                navigate('/')

            }).catch((error)=>{
                console.log(error)
            })
        }
     }

     useEffect(()=>{
        if(location.state!=null){
          setCourse({...employee,
            EmployeeId:location.state.employee.EmployeeId,
            EmployeeName:location.state.employee.EmployeeName,
            Location:location.state.employee.Location,
            Designation:location.state.employee.Designation,
            Salary:location.state.employee.Salary,
          })
        }
      },[])
  return (
    <div>
    <h2 style={{ paddingTop: "50px",color:"black" }}>ADD EMPLOYEE</h2>

    <Box 
    component="form"
    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
    noValidate
    autoComplete="off"
  >

    <TextField id="standard-basic"
     label="EmployeeId"
     value={employee.EmployeeId}
      variant="outlined"
    onChange={fetchValue}   
       name="EmployeeId" 
      
       /><br/>

     <TextField id="standard-basic"
      label="EmployeeName" 
      value={employee.EmployeeName}
      variant="outlined"  
      onChange={fetchValue}  
      name="EmployeeName" /><br/> 

    <TextField id="standard-basic" 
    label="Category" 
    value={employee.Location}
    variant="outlined" 
     onChange={fetchValue} 
     name="Location" /><br/>

    <TextField id="standard-basic" 
    label="Salary"
    value={employee.Salary}
     variant="outlined"
     onChange={fetchValue} 
     name="Sala" /><br/>

<br/>
    <Button onClick={sendData} variant="contained">submit</Button> 
    </Box>
    </div>
  )
}

export default Add