const router = require('express').Router();
const TeacherReg = require('../model/teacherRegistration');
const Teacher = require('../model/Teacher');
const bcrypt = require('bcrypt');
router.post('/login',async(req,res)=>{
    try{
         let userid = req.body.userid.trim();
         let password = req.body.password.trim();
        
         if(userid[0]== 'T'){
        //     if(userid != "" && password!="" && confirmpassword != ""){
        //         if(password === confirmpassword){
                     const data = await TeacherReg.findOne({teacherUniqueId:userid});
                     if(data != null){
                         let hashedPassword = data.teacherPassword;
                         bcrypt.compare(password,hashedPassword,(err,result)=>{
                             if(result){
                                 res.status(200).json({message:"Login Successfull"});
                             }else{
                                 res.status(200).json({message:"Password didn't match"});
                             }
                         })
                     }else{
                         res.status(200).json({message:"Userid is not correct..."});
                     }
                 }
       
       else{
             res.status(200).json({message:"USerid is not Valid"});
         }
        
    }catch(err){
        res.status(500).send(err);
    }
});




router.post('/reg',async(req,res)=>{
    try{
        if(req.body.password == req.body.confirmpassword){
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password,salt);
            const reg = new TeacherReg({
                teacherUniqueId:req.body.teacherUniqId,
                teacherPassword:hashedPassword
            });
            const data = TeacherReg.insertMany(reg);
            res.status(200).json({message:"Registered"});
            // res.send("Hello");
        }
    }catch(err){
        res.status(500).send(err);
    }
})


module.exports = router;