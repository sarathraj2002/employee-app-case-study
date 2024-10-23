const mongoose=require('mongoose');
const employeeSchema=mongoose.Schema({

    EmployeeName:String,
    Location:String,
    designation:String,
    salary:Number
})
const employeeData=mongoose.model('employeedb',employeeSchema);
module.exports=employeeData;