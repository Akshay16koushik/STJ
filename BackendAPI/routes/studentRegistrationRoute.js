const router = require('express').Router();
const Student = require('../model/student');
const StudentReg = require('../model/studentRegistration');
// const fs = require('fs');
const bcrypt = require('bcrypt');

router.post('/register',async(req,res)=>{
    try{
        const ifpresent = await Student.findOne({studentRegisterNumber:req.body.studentRegisterNumber});
        if(ifpresent != null){
            const exist = await StudentReg.findOne({studentRegisterNumber:req.body.studentRegisterNumber});
            if(exist == null){
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(req.body.studentPassword,salt);
                const newReg = new StudentReg({
                    studentRegisterNumber:req.body.studentRegisterNumber,
                    studentPassword:hashedPassword
                });
                const data = await StudentReg.insertMany(newReg);
                res.status(200).json({message:"Registered successfully"});
            }else{
                res.status(200).json({message:"You have registered"})
            }
        }
        else{
            res.status(400).json({message:"Incorrect register Number"});
        }
    }
    catch(err){
        res.status(500).send(err);
    }    
});
router.post('/login',async(req,res)=>{
    try{
        let prefix = req.body.studentRegisterNumber.substring(0,3);
        if(prefix == "STJ"){
            const loginCredentials = await StudentReg.findOne({studentRegisterNumber:req.body.studentRegisterNumber});
            if(loginCredentials!=null){
                let hashedPassword = loginCredentials.studentPassword;
                bcrypt.compare(req.body.studentPassword,hashedPassword,(err,result)=>{
                    if(result){
                        res.status(200).json({message:'Login Successfull....'});
                    }else{
                        res.status(200).json({message:"Password incorrect"});
                    }
                });
            }
            else{
                res.status(200).json({message:"Invalid register number"})
            }
        }
        else{
            res.status(200).json({message:"Invalid registernumber"});
        }
        
        
    }catch(err){
        res.status(500).send(err);
    }
});
module.exports = router;