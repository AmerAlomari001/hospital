const express=require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app=express();
require("dotenv").config()
app.use(bodyParser.json());


mongoose.connect(process.env.mongoos_URI,{
   

}).then(() => console.log("MongoDB connected"))
.catch((err) => console.error("Connection error:", err));


const appointmentsRoutes = require("./routes/appointments")
const departmentsRoutes = require("./routes/departments")
const doctorRoutes = require("./routes/doctors")
const patientsRoutes = require("./routes/patients")
const roomRoutes = require("./routes/rooms")
const nursesRoutes = require("./routes/nurses")
const drugsRoutes = require("./routes/drugs")





app.use('/appointments', appointmentsRoutes) 
app.use('/departments', departmentsRoutes) 
app.use('/doctors', doctorRoutes) 
app.use('/patients', patientsRoutes) 
app.use('/rooms', roomRoutes) 
app.use('/nurses', nursesRoutes) 
app.use('/drugs', drugsRoutes) 





 const PORT=process.env.PORT||5000
 app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})