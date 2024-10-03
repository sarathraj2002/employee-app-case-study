const mongoose=require('mongoose');
const employeeSchema=mongoose.Schema({
    employeeName:'string',
    employeeLocation:'string',
    employeedesignation:'string',
    employeesalary:'number'
})
const employeeData=mongoose.model('employeedb',employeeSchema)