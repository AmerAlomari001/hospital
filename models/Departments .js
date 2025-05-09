const mongoos=require("mongoose")
const departmentsschema=new mongoos.Schema({
    Iddepartment: { type: String, required: true,unique: true },
    name: { type: String, required: true },
    floor: { type: String, required: true },
    reason: { type: String },
    phone:{type:String,required:true}
})
const department = mongoos.model('department', departmentsschema);
module.exports = department;