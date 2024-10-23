const mongoose=require('mongoose');
const employeeSchema=mongoose.Schema({

    EmployeeName:String,
    Location:String,
    designation:String,
    Salary:Number
})
const employeeData=mongoose.model('employeedb',employeeSchema);
module.exports=employeeData;