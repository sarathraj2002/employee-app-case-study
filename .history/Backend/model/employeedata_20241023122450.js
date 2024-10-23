const mongoose=require('mongoose');
const employeeSchema=mongoose.Schema({

    EmployeeName:String,
    Location:String,
    Employeedesignation:String,
    Employeesalary:Number
})
const employeeData=mongoose.model('employeedb',employeeSchema);
module.exports=employeeData;