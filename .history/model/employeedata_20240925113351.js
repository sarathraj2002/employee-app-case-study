const mongoose=require('mongoose');
const employeeSchema=mongoose.Schema({
    employeeName:String,
    employeeLocation:String,
    employeedesignation:'string',
    employeesalary:number
})
const employeeData=mongoose.model('employeedb',employeeSchema);
module.exports=employeeData;