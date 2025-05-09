const express=require("express")
const router=express.Router()
const Drugs=require("../models/Drugs")

//add drug
router.post('/',async (req,res)=>{
    try {
        const drugg = new Drugs(req.body)

        await drugg.save()

        res.status(201).send(drugg)
    } catch (error) {

        res.status(400).send(err)
        
    }


})
    //get all drugs
            router.get('/',async (req,res)=>{
                try {
                    const alldrugs= await Drugs.find()
                    res.status(201).send(alldrugs)
                    } catch (error) {
                        res.status(401).send(error)
                }
            })

               //get drug by id
                router.get("/:id",async (req,res)=>{
            const drugg= await Drugs.findOne({drugId:req.params.id})
            if(!drugg) return res.status(400).send("drug not found ")
            
                res.send(drugg)
            })
            
            //update information drug
            router.put("/:id", async (req, res) => {
                try {
                    const updatedrug = await Drugs.findOneAndUpdate({drugId: req.params.id},req.body, { new: true });
                    if (!updatedrug) return res.status(404).send("drug not found");
                    res.send(updatedrug);
                } catch (error) {
                    res.status(400).send(error.message);
                }
            })
                
            
            
                //delete drug
                router.delete('/:id',async (req,res)=>{
              const deletedrug=await Drugs.findOneAndDelete({drugId:req.params.id})
              if(deletedrug.deletedCount===0) return res.status(404).send("drug not found")
            
                res.send({message:"drug has been deleted"})
                })


            module.exports = router;