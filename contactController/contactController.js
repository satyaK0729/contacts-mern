const getContacts=(req,res)=>{
    res.status(200).json({message:"get all constacts"})
}
const getContact=(req,res)=>{
    res.status(200).json({message:"get a constacts"})
}

const createContact =(req,res)=>{
    console.log('the entered info is ',req.body);
    const {name,email,phone}=req.body;
    if (!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(200).json({message:"Add constact"})
}

const updateContact = (req,res)=>{
    res.status(200).json({message:`Update constact ${req.params.id}`})
}

const deleteContact=(req,res)=>{
    res.status(200).json({message:`delete constact ${req.params.id}`})  
}

module.exports={getContacts,getContact,createContact,updateContact,deleteContact};