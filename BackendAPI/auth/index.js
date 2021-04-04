const router = require('express').Router();
const jwt = require('jsonwebtoken');



const verifyToken = (req,res,next)=>{
    req.Token = req.body.token;
    jwt.verify(req.Token,'STJSEC',async(err,tokendata)=>{
        if(err){
            res.status(200).json({message:'Unauthorized request',tokendata});
        }
        if(tokendata){

            let uniqueId= tokendata.Staff;
            return uniqueId;
        }
    })
}

const CheckUser = () =>{
    
}



module.exports ={
    verifyToken
}