const express=require('express');
const app=express();
const dotenv=require('dotenv').config();

const PORT=process.env.PORT || 3000;

app.get("/api",(req,res)=>{
    res.json({message:"Hello this is the API"});
})
app.get("/api/contacts",(req,res)=>{
    res.json({message:"All the contacts"});
})

app.listen(PORT,(error)=>{
    try{
        console.log(`Server is running on port ${PORT}`);
    }catch(error){
        console.error('Error starting the server:', error);
    }
});