const express =require("express");
const errorHandler = require("./middleware/errorHandler");
const app=express();
const dotenv=require("dotenv").config();

const PORT= process.env.PORT || 3000;

app.use(express.json());

app.use("/api/contacts",require("./routes/contactRoutes"))
app.use(errorHandler)
app.listen(PORT,()=>{
    console.log("server connected to the port",PORT);
})


