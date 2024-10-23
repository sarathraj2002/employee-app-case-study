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
            EmployeeId:location.state.course.EmployeeId,
            EmployeeName:location.state.course.EmployeeName,
            Location:location.state.course.Location,
            Designation:location.state.course.Designation,
            Salary:location.state.course.Fees,
          })
        }
      },[])
  return (
    
  )
}

export default Add