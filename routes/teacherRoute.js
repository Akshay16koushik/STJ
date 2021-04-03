const router = require('express').Router();
const Teacher = require('../model/Teacher');
const fs = require('fs');
const UniqId = require('../Functions/Random');
router.get('/',async(req,res)=>{
    try{
        const data = await Teacher.find({});
        res.status(200).json({message:'Request Success',data:data})
    }catch(err){
        res.status(500).send(err);
    }
});
router.get('/fornontech',async(req,res)=>{
    try{
        const data = await Teacher.find({},{_id:1,teacherBoard:1,teacherName:1,teacherSex:1,teacherAge:1,teacherDesignation:1,teacherAddress:1,teacherPhonenumber:1,teacherAssignedClasses:1});
        if(data!=null){
            res.status(200).json({message:"Here it comes",data:data});
        }else{
            res.status(200).json({message:"No data",data:data})
        }
    }catch(err){
        res.status(500).send(err);
    }
});

router.post('/add',async(req,res)=>{
    
    try{
        let id = 'T'+ UniqId();
        // let value = data.teacherAssignedClasses.length;
        const tech = new Teacher({
            teacherUniqId:id,
            teacherBoard:req.body.teacherBoard,
            teacherName:req.body.teacherName,
            teacherSex:req.body.teacherSex,
            teacherAge:req.body.teacherAge,
            teacherSubject:req.body.teacherSubject,
            teacherDesignation:req.body.teacherDesignation,
            teacherAddress:req.body.teacherAddress,
            teacherPhonenumber:req.body.teacherPhonenumber,
            // teacherImg:{
            //     data:fs.readFileSync(req.body.teacherImg),
            //     contentType:'image'
            // },
            teacherAssignedClasses:req.body.teacherAssignedClasses
        });
        const data = await Teacher.insertMany(tech);
        res.status(200).json({message:'Added Successfully'});
    }catch(err){
        res.status(500).send(err);
    }
});

router.put('/addclass',async(req,res)=>{
    const data = await Teacher.findOne({teacherUniqId:req.body.teacherUniqId});
    //  console.log(data);
     if(data !=null){
        data.teacherAssignedClasses.push(req.body.teacherAssignedClasses);
        data.save();
        res.status(200).json({message:"Class has been assigned to the teacher"});
     }else{
         res.status(400).json({message:"Teacher id is incorrect.."})
     }
}); 
router.put('/update/:id',async(req,res)=>{
    try{
        const data = await Teacher.findOneAndUpdate({teacherUniqId:req.params.teacherUniqId},{$set:{...req.body}});
        res.status(200).json({message:"Teacher details updated",data:data})
    }catch(err){
        res.status(500).send(err);
    }
});
router.delete('/delet/:id',async(req,res)=>{
    try{
        const data = await Teacher.findOneAndDelete({teacherUniqId:req.params.teacherUniqId},{$set:{...req.body}});
        res.status(200).json({message:"Teacher Deleted",data:data});
    }catch(err){
        res.status(500).send(err);
    }
});
module.exports = router;