const router = require('express').Router();
const e = require('express');
let Student = require('../model/student');

router.get('/',async(req,res)=>{
    try{
        const data = await Student.find({});
        res.status(200).json({message:'REquest Success',data:data});
    }catch(err){
        res.status(500).send(err);
    }
});
router.get('/fornontech',async(req,res)=>{
    try{
        const data = await Student.find({},{_id:1,studentRegisterNumber:1,studentName:1,studentFatherName:1,studentMotherName:1,studentSex:1,studentBloodGroup:1,parentNumber:1,studentParmanentAddress:1,studentExistingAddress:1,studentClass:1,studentFee:1,studentBoard:1,studentBoard:1});
        if(data != null){
            res.status(200).json({message:"Here it is",data:data});
        }else{
            res.status(200).json({message:"No data",data:data})
        }
    }catch(err){
        res.status(500).send(err);
    }
})
router.post('/add',async(req,res)=>{
    try{
        const newStudent = new Student({
            studentRegisterNumber:req.body.studentRegisterNumber,
            studentName:req.body.studentName,
            studentFatherName:req.body.studentFatherName,
            studentMotherName:req.body.studentMotherName,
            studentAge:req.body.studentAge,
            studentSex:req.body.studentSex,
            studentBloodGroup:req.body.studentBloodGroup,
            parentNumber:req.body.parentNumber,
            studentParmanentAddress:req.body.studentParmanentAddress,
            studentExistingAddress:req.body.studentExistingAddress,
            studentClass:req.body.studentClass,
            studentFee:req.body.studentFee,
            studentBoard:req.body.studentBoard });
            const data = Student.insertMany(newStudent);
            res.status(200).json({message:'Student Added'});
    }catch(err){
        res.status(500).send(err);
    }
});
router.put('/update/:id',async(req,res)=>{
    try{
        const data = await Student.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}});
        res.status(200).json({message:'Student details Updated',data:data});
    }catch(err){
        res.status(500).send(err);
    }
});
router.post('/studupdate',async(req,res)=>{
    try{
        const data = await Student.findOne({studentRegisterNumber:req.body.studentRegisterNumber},{_id:0,studentFee:0});
        if(data!=null){
            res.status(200).json({message:"Yup",data:data})
        }else{
            res.status(200).json({message:"Something went wrong"})
        }
    }catch(err){
        res.status(500).send(err);
    }
})
router.delete('/delete/:id',async(req,res)=>{
    try{
        const data = await Student.findByIdAndDelete({_id:req.params.id},{$set:{...req.body}});
        res.status(200).json({message:'Deleted Student details',data:data});
    }catch(err){
        res.status(500).send(err)
    }
})

module.exports = router;
