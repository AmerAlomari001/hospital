const express=require("express")
const router=express.Router()
const rooms=require("../models/Rooms")
const existdepartment=require("../models/Departments ")

//add room
router.post('/' ,async(req ,res)=>{
try {
    const exist = await existdepartment.findOne({ Iddepartment: req.body.departmentid2 });
    if (!exist)  return res.status(400).send("department not found");

    const newroom=new rooms(req.body)
    await newroom.save()
    res.status(202).send(newroom)
} catch (error) {
    res.status(400).send(error)
}
})
//get all rooms
router.get('/',async (req,res)=>{
    try {
        const allroom= await rooms.find()
        res.status(201).send(allroom)
        } catch (error) {
            res.status(401).send(error)
    }
})
 //get rooms by id
                router.get("/:id",async (req,res)=>{
            const roomss= await rooms.findOne({roomNumber:req.params.id})
            if(!roomss) return res.status(400).send("rooms not found ")
            
                res.send(roomss)
            })
            
            //update information rooms
            router.put("/:id", async (req, res) => {
                try {
                    const updateroom = await rooms.findOneAndUpdate({roomNumber: req.params.id},req.body,{new:true});
                    if (!updateroom) return res.status(404).send("room not found");
                    res.send(updateroom);
                } catch (error) {
                    res.status(400).send(error.message);
                }
            })
                
            
            
                //delete room
                router.delete('/:id',async (req,res)=>{
              const deleteroom=await rooms.findOneAndDelete({roomNumber:req.params.id})
              if(deleteroom.deletedCount===0) return res.status(404).send("room not found")
            
                res.send({message:"room has been deleted"})
                })


module.exports = router;