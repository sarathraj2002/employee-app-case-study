const mongoose=require('mongoose');
const employeeSchema=mongoose.Schema({

    EmployeeName:String,
    EmployeeLocation:String,
    employeedesignation:String,
    employeesalary:Number
})
const employeeData=mongoose.model('employeedb',employeeSchema);
module.exports=employeeData;