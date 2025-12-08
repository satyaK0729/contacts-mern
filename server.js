const express=require('express');
const app=express();
const dotenv=require("dotenv").config()

const PORT= process.env.PORT || 2000;

app.use(express.json())

app.use("api/contacts",require("./routes/contactRoutes"))

app.listen(PORT,()=>{
    console.log("Server conneted to the port: ",PORT)
})