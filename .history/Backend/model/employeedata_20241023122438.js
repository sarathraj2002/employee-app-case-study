const mongoose=require('mongoose');
const employeeSchema=mongoose.Schema({

    Employee Name:String,
    EmployeeLocation:String,
    Employeedesignation:String,
    Employeesalary:Number
})
const employeeData=mongoose.model('employeedb',employeeSchema);
module.exports=employeeData;