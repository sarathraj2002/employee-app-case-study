const express=require('express');
const cors=require('cors')
const app=new express();
app.use(cors)
const morgan=require('morgan');
app.use(morgan('dev'));
const basicRoutes=require('./routes/basicroutes');
 app.use('/basic',basicRoutes);
 
require('dotenv').config();
const PORT=process.env.PORT;
require('./db/connection');
app.use(express.static('public')); 
const nav=[
    {
    
            link:'/basic',name:'Home'
    
    },{
            link:'/basic/employeeform',name:'ADD Employee'
        }
    ]



app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
})
