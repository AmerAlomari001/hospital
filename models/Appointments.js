const mongoos=require("mongoose")
const appointmentsschema=new mongoos.Schema({
    appointmentId: { type: String, required: true,unique:true },
    doctorid: { type: String,ref:"Doctors", required: true  },
    nameofdepartment: { type: String,ref:"Departments", required: true  },
    date: { type: String, required: true },
    reason: { type: String }
})
const appointment=mongoos.model('appointment',appointmentsschema)
module.exports=appointment;