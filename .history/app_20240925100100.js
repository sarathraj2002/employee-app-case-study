const express=require('express');
const app=new express();
const morgan=require('morgan');
app.use(morgan('dev'));
app.set('view engine','ejs');
app.set('views',__dirname+)












app.listen(PORT,()=>{
    console.log(`server running on PORT $(PORT)`);
})
