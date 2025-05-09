const mongoos=require("mongoose")
const Nursesschema=new mongoos.Schema({
    Id: { type: String, required: true,unique: true },
    name: { type: String, required: true },
    age: { type: String, required: true },
    gender: { type: String },
    email:{type:String,require:true},
    departmentId: { type: String, required: true, ref: "Departments" }
})
const nurses = mongoos.model('nurses', Nursesschema);
module.exports = nurses;