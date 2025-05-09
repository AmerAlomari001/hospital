const express=require("express")
const router=express.Router()
const patients=require("../models/Patients")
const existdoctor=require("../models/Doctors")
const existdepartment=require("../models/Departments ")
//add patients
router.post('/' ,async(req ,res)=>{
    try {
        const exist = await existdoctor.findOne({ Id: req.body.supervisorDoctorId });
        if (!exist) return res.status(400).send("doctor not found");

            const departmentname = await existdepartment.findOne({ Iddepartment: req.body.depattmebtiid });
                    if (!departmentname) return res.status(400).send("Department not found");

                    const newdpatient= new patients(req.body);
                    await newdpatient.save();
                    res.status(202).send(newdpatient);
                    
        }

      
     catch (error) {
        res.status(400).send(error);
    }
    })
    //get all patient
router.get('/',async (req,res)=>{
    try {
        const allpatient= await patients.find()
        res.status(201).send(allpatient)
        } catch (error) {
            res.status(401).send(error)
    }
})
    //get patient by id
                router.get("/:id",async (req,res)=>{
            const patientt= await patients.findOne({patientId:req.params.id})
            if(!patientt) return res.status(400).send("patient not found ")
            
                res.send(patientt)
            })
            
            //update information patient
            router.put("/:id", async (req, res) => {
                try {
                    const updatedpatient = await patients.findOneAndUpdate({patientId: req.params.id},req.body,{new:true});
                    if (!updatedpatient) return res.status(404).send("patient not found");
                    res.send(updatedpatient);
                } catch (error) {
                    res.status(400).send(error.message);
                }
            })
                
            
            
                //delete patient
                router.delete('/:id',async (req,res)=>{
              const deletepatient=await patients.findOneAndDelete({patientId:req.params.id})
              if(deletepatient.deletedCount===0) return res.status(404).send("appointment not found")
            
                res.send({message:"patient has been deleted"})
                })


            module.exports = router;
