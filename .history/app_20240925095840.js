const express=require('express');
const app=new express();
const morgan=require('morgan');
app.use(morgan('dev'));
app.use












app.listen(PORT,()=>{
    console.log(`server running on PORT $(PORT)`);
})
