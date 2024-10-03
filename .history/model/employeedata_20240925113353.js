const mongoose=require('mongoose');
const employeeSchema=mongoose.Schema({
    employeeName:String,
    employeeLocation:String,
    employeedesignation:'tring',
    employeesalary:number
})
const employeeData=mongoose.model('employeedb',employeeSchema);
module.exports=employeeData;