
const express=require("express")
const router=express.Router()
const nurses=require("../models/Nurses")
const departmmentexist=require("../models/Departments ")
//add nurses
router.post('/' ,async(req ,res)=>{
    try {
        const exist = await departmmentexist.findOne({ Iddepartment: req.body.departmentId });
        if (!exist) {
            return res.status(400).send("department not found");
        }

        const newdnurse= new nurses(req.body);
        await newdnurse.save();
        res.status(202).send(newdnurse);
    } catch (error) {
        res.status(400).send(error);
    }
   
    })
      //get all nurses
    router.get('/',async (req,res)=>{
        try {
            const allnurses= await nurses.find()
            res.status(201).send(allnurses)
            } catch (error) {
                res.status(401).send(error)
        }
    })
    //get nurses by id
    router.get("/:id",async (req,res)=>{
const nursess= await nurses.findOne({Id:req.params.id})
if(!nursess) return res.status(400).send("nurses not found ")

    res.send(nursess)
})

//update information nurses
router.put("/:id", async (req, res) => {
    try {
        const updatednurses = await nurses.findOneAndUpdate({Id: req.params.id},req.body,{new:true});
        if (!updatednurses) return res.status(404).send("niurses not found");
        res.send(updatednurses);
    } catch (error) {
        res.status(400).send(error.message);
    }
})


    //delete nurse
    router.delete('/:id',async (req,res)=>{
  const deletenurse=await nurses.findOneAndDelete({Id:req.params.id})
  if(deletenurse.deletedCount===0) return res.status(404).send("nurse not found")

    res.send({message:"nurse has been deleted"})
    })
    module.exports = router;
