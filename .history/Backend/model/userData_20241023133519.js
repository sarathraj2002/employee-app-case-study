const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    Username:String,
    Password:String
    
})

const userModel=mongoose.model('user',userSchema)
module.exports=userModel