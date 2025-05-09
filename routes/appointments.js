const express=require("express")
const router=express.Router()
const appointments=require("../models/Appointments")
const Doctor1 = require("../models/Doctors");
const namedepartment = require("../models/Departments ");
//add appointments
router.post('/', async (req, res) => {
    try {
        const exist = await Doctor1.findOne({ Id: req.body.doctorid });
        if (!exist) {
            return res.status(400).send("Doctor not found");
        }

        const departmentname = await namedepartment.findOne({ name: req.body.nameofdepartment });
        if (!departmentname) {
            return res.status(400).send("Department not found");
        }

        const newAppointment = new appointments(req.body);
        await newAppointment.save();
        res.status(202).send(newAppointment);
    } catch (error) {
        res.status(400).send(error);
    }
});
    //get all appointment
            router.get('/',async (req,res)=>{
                try {
                    const allappointment= await appointments.find()
                    res.status(201).send(allappointment)
                    } catch (error) {
                        res.status(401).send(error)
                }
            })

               //get appointment by id
                router.get("/:id",async (req,res)=>{
            const appointmentt= await appointments.findOne({appointmentId:req.params.id})
            if(!appointmentt) return res.status(400).send("appointment not found ")
            
                res.send(appointmentt)
            })
            
            //update information appointment
            router.put("/:id", async (req, res) => {
                try {
                    const updatedappointment = await appointments.findOneAndUpdate({appointmentId: req.params.id},req.body,{new:true});
                    if (!updatedappointment) return res.status(404).send("appointment not found");
                    res.send(updatedappointment);
                } catch (error) {
                    res.status(400).send(error.message);
                }
            })
                
            
            
                //delete appointment
                router.delete('/:id',async (req,res)=>{
              const deletappointment=await appointments.findOneAndDelete({appointmentId:req.params.id})
              if(deletappointment.deletedCount===0) return res.status(404).send("appointment not found")
            
                res.send({message:"appointment has been deleted"})
                })


            module.exports = router;