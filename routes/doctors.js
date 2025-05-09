const express=require("express")
const router=express.Router()
const doctors=require("../models/Doctors")
const departmmentexist=require("../models/Departments ")
//add doctor
router.post('/' ,async(req ,res)=>{
    try {
        const exist = await departmmentexist.findOne({ Iddepartment: req.body.departmentId });
        if (!exist) {
            return res.status(400).send("department not found");
        }

        const newdoctor= new doctors(req.body);
        await newdoctor.save();
        res.status(202).send(newdoctor);
    } catch (error) {
        res.status(400).send(error);
    }
   
    })
      //get all doctor
    router.get('/',async (req,res)=>{
        try {
            const alldoctor= await doctors.find()
            res.status(201).send(alldoctor)
            } catch (error) {
                res.status(401).send(error)
        }
    })
    //get docto by id
    router.get("/:id",async (req,res)=>{
const doctorss= await doctors.findOne({Id:req.params.id})
if(!doctorss) return res.status(400).send("doctor not found ")

    res.send(doctorss)
})

//update information doctor
router.put("/:id", async (req, res) => {
    try {
        const updatedDoctor = await doctors.findOneAndUpdate({Id: req.params.id},req.body,{new:true});
        if (!updatedDoctor) return res.status(404).send("Doctor not found");
        res.send(updatedDoctor);
    } catch (error) {
        res.status(400).send(error.message);
    }
})


    //delete doctor
    router.delete('/:id',async (req,res)=>{
  const deletedoctor=await doctors.findOneAndDelete({Id:req.params.id})
  if(deletedoctor.deletedCount===0) return res.status(404).send("doctor not found")

    res.send({message:"doctor has been deleted"})
    })
    module.exports = router;
