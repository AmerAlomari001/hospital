const mongoos=require("mongoose")
const patienstschema=new mongoos.Schema({
    patientId: { type: String, required: true,unique: true },
    name: { type: String, required: true },
    age: { type: String, required: true },
    gender: { type: String },
    description:{type:String,require:true},
    supervisorDoctorId:{type:String,ref:"Doctors",req:true},
    depattmebtiid:{type:String,ref:"Departments",req:true}
})
const patient = mongoos.model('patient', patienstschema);
module.exports = patient;