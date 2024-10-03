const express=require('express');
const app=new express();
const morgan=require('morgan');
app.use(morgan('dev'));












app.listen(3000,()=>{
    console.log(`server running on PORT $())`);
})
