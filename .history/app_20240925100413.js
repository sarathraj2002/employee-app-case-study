const express=require('express');
const app=new express();
const morgan=require('morgan');
app.use(morgan('dev'));
const basicRoutes=require('./routes/basicroutes');
app.use()
app.set('view engine','ejs');
app.set('views',__dirname+'/views');












app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
})
