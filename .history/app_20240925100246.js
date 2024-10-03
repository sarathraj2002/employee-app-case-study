const express=require('express');
const app=new express();
const morgan=require('morgan');
app.use(morgan('dev'));
const 
app.set('view engine','ejs');
app.set('views',__dirname+'/views');












app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
})
