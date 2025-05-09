const express=require("express")
const router=express.Router()
const departments=require("../models/Departments ")
//add departments
router.post('/' ,async(req ,res)=>{
    try {
        const newdepartment=new departments(req.body)
        await newdepartment.save()
        res.status(202).send(newdepartment)
    } catch (error) {
        res.status(400).send(error)
    }
    })
      //get all departments
        router.get('/',async (req,res)=>{
            try {
                const alldepartment= await departments.find()
                res.status(201).send(alldepartment)
                } catch (error) {
                    res.status(401).send(error)
            }
        })
        module.exports = router;
        

               //get department by id
               router.get("/:id",async (req,res)=>{
                const departmentt= await departments.findOne({Iddepartment:req.params.id})
                if(!departmentt) return res.status(400).send("department not found ")
                
                    res.send(departmentt)
                })
                
                //update information department
                router.put("/:id", async (req, res) => {
                    try {
                        const updateddepartments = await departments.findOneAndUpdate({Iddepartment: req.params.id},req.body,{new:true});
                        if (!updateddepartments) return res.status(404).send("departments not found");
                        res.send(updateddepartments);
                    } catch (error) {
                        res.status(400).send(error.message);
                    }
                })
                    
                
                
                    //delete department
                    router.delete('/:id',async (req,res)=>{
                  const deletdepartment=await departments.findOneAndDelete({Iddepartment:req.params.id})
                  if(deletdepartment.deletedCount===0) return res.status(404).send("department not found")
                
                    res.send({message:"department has been deleted"})
                    })