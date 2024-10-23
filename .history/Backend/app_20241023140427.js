const express=require('express');
const cors=require('cors')
const app=new express();
app.use(cors())
const basicRoutes=require('./routes/basicroutes');
const employee
 app.use('/basic',basicRoutes);
const morgan=require('morgan');
app.use(morgan('dev'));
require('dotenv').config();
const PORT=process.env.PORT;
require('./db/connection');




app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
})
