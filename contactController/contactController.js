const asyncHandler=require("express-async-handler");

const getContacts=asyncHandler(async(req,res)=>{
    res.status(200).json({message:"get all constacts"})
})
const getContact=asyncHandler(async(req,res)=>{
    res.status(200).json({message:"get a constacts"})
    
})

const createContact =asyncHandler(async(req,res)=>{
    console.log('The entered info is ',req.body);
    const {name,email,phone}=req.body;
    if (!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(200).json({message:"Add constact"})
})

const updateContact =asyncHandler(async (req,res)=>{
    res.status(200).json({message:`Update constact ${req.params.id}`})
})

const deleteContact=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`delete constact ${req.params.id}`})  
})
module.exports={getContacts,getContact,createContact,updateContact,deleteContact};