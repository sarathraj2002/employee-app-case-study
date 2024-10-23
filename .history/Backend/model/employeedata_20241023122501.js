const mongoose=require('mongoose');
const employeeSchema=mongoose.Schema({

    EmployeeName:String,
    Location:String,
    designation:String,
    ssalary:Number
})
const employeeData=mongoose.model('employeedb',employeeSchema);
module.exports=employeeData;