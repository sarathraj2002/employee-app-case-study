const mongoose=require('mongoose');
const employeeSchema=mongoose.Schema({

    mployeeName:String,
    employeeLocation:String,
    employeedesignation:String,
    employeesalary:Number
})
const employeeData=mongoose.model('employeedb',employeeSchema);
module.exports=employeeData;