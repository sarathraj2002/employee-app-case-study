const express=require('express');
const app=new express();
const morgan=require('morgan');
app.use(morgan('dev'));
const basicRoutes=require('./routes/basicroutes');
 app.use('/basic',basicRoutes);
 app.set('view engine','ejs');
 app.set('views',__dirname+'/views');
require('dotenv').config();
const PORT=process.env.PORT;
require('./db/connection');
app.use(express.static('public')); 



app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
})
