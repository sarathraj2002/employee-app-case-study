const express=require('express');
const app=new express();
const morgan=require('morgan');
app.use(morgan('dev'));
const basicRoutes=require('./routes/basicroutes');
app.use('/basic',basicRoutes);
/
require('dotenv').config();
const PORT=process.env.PORT;
require('./db/connection');



app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
})
