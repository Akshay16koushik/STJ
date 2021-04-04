const router = require('express').Router();

const cbscmarks = require('../model/cbscm');
const Teacher = require('../model/Teacher');
const Student = require('../model/student');
router.get('/',async(req,res)=>{
    try{
        const data = await cbscmarks.find();
        if(data!=null){
            res.status(200).json({message:"Yo",data:data});
        }else{
            res.status(200).json({message:"Nope"})
        }
    }catch(err){
        res.status(500).send(err);
    }
    
});
router.post('/add',async(req,res)=>{
try{
    const TeacherCheck = await Teacher.findOne({teacherUniqId:req.body.teacherUniqId});
    const CheckStudent = await Student.findOne({studentRegisterNumber:req.body.studentRegisterNumber});
    if(TeacherCheck !=null && CheckStudent!=null){
        if(req.body.exam == "Monthly Test 1"){
            const marks = new cbscmarks({
                studentRegisterNumber:req.body.studentRegisterNumber,
                studentClass:req.body.studentClass,
                MonthltTest1:[{
                    Kannada:req.body.Kannada,
                    English:req.body.English,
                    Hindi:req.body.Hindi,
                    Mathematics:req.body.Mathematics,
                    Science:req.body.Science,
                    SocialStudies:req.body.SocialStudies
                }]
            });
            const data = await cbscmarks.insertMany(marks);
            if(data!=null){
                res.status(200).json({message:"Added",data:data});
            }else{
                res.status(200).json({message:"Something went wrong try again"});
            }
        }else if(req.body.exam == "Monthly Test 2"){
            const marks = await cbscmarks.updateOne({studentRegisterNumber:req.body.studentRegisterNumber},{MonthltTest2:[{
                Kannada:req.body.Kannada,
                English:req.body.English,
                    Hindi:req.body.Hindi,
                    Mathematics:req.body.Mathematics,
                    Science:req.body.Science,
                    SocialStudies:req.body.SocialStudies
            }]});
        if(marks != null){
            res.status(200).json({message:"Updated"});
        }else{
            res.status(200).json({message:"Something went wrong try again"});
        }

     }else if(req.body.exam == "Monthly Test 3"){
        const marks = await cbscmarks.updateOne({studentRegisterNumber:req.body.studentRegisterNumber},{MonthltTest3:[{
            Kannada:req.body.Kannada,
            English:req.body.English,
                Hindi:req.body.Hindi,
                Mathematics:req.body.Mathematics,
                Science:req.body.Science,
                SocialStudies:req.body.SocialStudies
        }]});
    if(marks != null){
        res.status(200).json({message:"Updated"});
    }else{
        res.status(200).json({message:"Something went wrong try again"});
    }

 }else if(req.body.exam == "Monthly Test 4"){
    const marks = await cbscmarks.updateOne({studentRegisterNumber:req.body.studentRegisterNumber},{MonthltTest4:[{
        Kannada:req.body.Kannada,
        English:req.body.English,
            Hindi:req.body.Hindi,
            Mathematics:req.body.Mathematics,
            Science:req.body.Science,
            SocialStudies:req.body.SocialStudies
    }]});
if(marks != null){
    res.status(200).json({message:"Updated"});
}else{
    res.status(200).json({message:"Something went wrong try again"});
}

}else if(req.body.exam == "MidTerm"){
    const marks = await cbscmarks.updateOne({studentRegisterNumber:req.body.studentRegisterNumber},{MidTerm:[{
        Kannada:req.body.Kannada,
        English:req.body.English,
            Hindi:req.body.Hindi,
            Mathematics:req.body.Mathematics,
            Science:req.body.Science,
            SocialStudies:req.body.SocialStudies
    }]});
if(marks != null){
    res.status(200).json({message:"Updated"});
}else{
    res.status(200).json({message:"Something went wrong try again"});
}
}else if(req.body.exam == "FinalTerm"){
    const marks = await cbscmarks.updateOne({studentRegisterNumber:req.body.studentRegisterNumber},{FinalTerm:[{
        Kannada:req.body.Kannada,
        English:req.body.English,
            Hindi:req.body.Hindi,
            Mathematics:req.body.Mathematics,
            Science:req.body.Science,
            SocialStudies:req.body.SocialStudies
    }]});
if(marks != null){
    res.status(200).json({message:"Updated"});
}else{
    res.status(200).json({message:"Something went wrong try again"});
}
}
 }

}catch(err){
    res.status(500).send(err);
}
});
router.post("/student",async(req,res)=>{
    try{
        const data = await cbscmarks.findOne({studentRegisterNumber:req.body.studentRegisterNumber});
        if(data != null){
            if(req.body.exam =="Monthly Test 1"){
                res.status(200).json({message:"Yo",data:data.MonthltTest1});
            }else if(req.body.exam =="Monthly Test 2"){
                res.status(200).json({message:"Yo",data:data.MonthltTest2});
            }else if(req.body.exam =="Monthly Test 3"){
                
                res.status(200).json({message:"Yo",data:data.MonthltTest3});
            }else if(req.body.exam =="Monthly Test 4"){
                res.status(200).json({message:"Yo",data:data.MonthltTest4});
            }else if(req.body.exam =="MidTerm"){
                res.status(200).json({message:"Yo",data:data.MidTerm});
            }else if(req.body.exam =="FinalTerm"){
                res.status(200).json({message:"Yo",data:data.FinalTerm});
            }
            else{
                res.status(200).json({message:"Nope"});
            }
            
        }
        else{
            res.status(200).json({message:"Nope",data:data});
        }
    }catch(err){
        res.status(500).send(err);
    }
});


module.exports = router;