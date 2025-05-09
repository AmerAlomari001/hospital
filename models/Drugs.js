const mongoos=require("mongoose")
const Drugschema=new mongoos.Schema({
    drugId: { type: String, required: true,unique:true },
    nameofddrug: { type: String, required: true  },
    expiry_date: { type: String, required: true },
    price: { type: String, required: true },
    stock_quantity: { type: String, required: true },


})
const drug=mongoos.model('drug',Drugschema)
module.exports=drug;