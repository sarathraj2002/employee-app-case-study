const mongoose=require('mongoose');
const employeeSchema=mongoose.Schema({
    EmployeeId:
    EmployeeName:String,
    Location:String,
    Designation:String,
    Salary:Number
})
const employeeData=mongoose.model('employeedb',employeeSchema);
module.exports=employeeData;