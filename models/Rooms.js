const mongoos=require("mongoose");
const department = require("./Departments ");
const roomsschema=new mongoos.Schema({
    roomNumber: { type: String, required: true ,unique: true},
    type: { type: String, required: true },
    floor: { type: String, required: true },
    capacity: { type: String },
    departmentid2:{type:String,ref:"Departments",require:true}
})
const Room = mongoos.model('Room', roomsschema);
module.exports = Room;