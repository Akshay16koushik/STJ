const router = require('express').Router();
const NonTechStaff = require('../model/NonTechStaff');
const genRandom = require('../Functions/Random');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/',async(req,res)=>{
    try{
        const data = await NonTechStaff.find({});
        if (data != null){
            res.send(data);
        }
        else{
            res.status(400).json({message:"No Data"});
        }
    }catch(err){
        res.status(500).send(err);
    }
});
router.post('/fornotech',verifyToken,async(req,res)=>{
    try{
        jwt.verify(req.body.Token,'STJSEC',async(err,authData)=>{
            if(err){
                res.sendStatus(403);
            }else{
                const data = await NonTechStaff.find({},{_id:1,staffName:1,staffAge:1,staffSex:1,staffDesignation:1,staffAddress:1,staffPhno:1,staffUniqueId:1})
                if(data!=null){
                    res.send(data);
                }else{
                    res.status(200).json({message:"No data"});
                }
            }
        })
        
    }catch(err){
        res.status(500).send(err);
    }
})
router.post('/add',verifyToken,async(req,res)=>{
    try{
        console.log(req.body.token)
        jwt.verify(req.Token,'STJSEC',async(err,authData)=>{
            if(err){
                res.sendStatus(403);
            }else{
               if(req.body.staffDesignation === "Office Assistant"){
            const newNonTechStaff = new NonTechStaff({
                staffUniqueId:genRandom(),
                staffName:req.body.staffName,
                staffAge:req.body.staffAge,
                staffSex:req.body.staffSex,
                staffDesignation:req.body.staffDesignation,
                staffAddress:req.body.staffAddress,
                staffPhno:req.body.staffPhno,
            });
            const data = await NonTechStaff.insertMany(newNonTechStaff);
            res.status(200).json({message:"Added"})
        }else{
            const newNonTechStaff = new NonTechStaff({
                staffName:req.body.staffName,
                staffAge:req.body.staffAge,
                staffSex:req.body.staffSex,
                staffDesignation:req.body.staffDesignation,
                staffAddress:req.body.staffAddress,
                staffPhno:req.body.staffPhno,
            });
            const data = await NonTechStaff.insertMany(newNonTechStaff);
            res.status(200).json({message:"Added"})
        }
            }
        });
        
    }catch(err){
        res.status(500).send(err);
    }
});

router.post('/staffid',verifyToken,async(req,res,next)=>{
    jwt.verify(req.Token,'STJSEC',async(err,tokendata)=>{
        if(err){
            res.status(200).json({message:'Unauthorized request',tokendata});
        }
        if(tokendata){

            let uniqueId= tokendata.Staff
            console.log(typeof uniqueId );
            res.status(200).json({ uniqueId})
        }
    })
})


router.put('/edit/:id',async(req,res)=>{
    try{
            // const data1 = await NonTechStaff.updateOne({...req.body});
            const data = await NonTechStaff.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}});
            if(data != null){
                res.status(200).json({message:"Edited",data:data});
            }
        else{
            res.status(400).json({message:"User Doesn't exist , please chcek your login id"});
        }
    }catch(err){
        res.status(500).send(err);
    }
});

router.delete('/delete/:id',async(req,res)=>{
    try{
            const data = await NonTechStaff.findByIdAndDelete({_id:req.params.id});
            if(data != null){
                res.status(200).json({message:"Deleted",data:data});
            }
        else{
            res.status(400).json({message:"User Doesn't exist , please chcek your login id"})
        }
    }catch(err){
        res.status(500).send(err);
    }
})
router.put('/register/:id',async(req,res)=>{
    try{
        if(req.body.password === req.body.confirmpassword){
            const salt = await bcrypt.genSalt(10);
            const hashpassword = await bcrypt.hash(req.body.password,salt);
            const data = await NonTechStaff.findOneAndUpdate({staffUniqueId:req.params.id},{$set:{staffPassword:hashpassword}});
            // console.log(data);
            if(data != null){
                res.status(200).json({message:"Registered",data})
            }else{
                res.status(200).json({message:"Incorrect Register number",data:data});
            }
        }else{
            res.status(200).json({message:"password and confirm password is not matching",data:null})
        }
    }catch(err){
        res.status(500).send(err);
    }
});


router.post('/login',async(req,res)=>{
    try{
        let userid = req.body.userid ;
        let newuserid = userid.trim();
        let password = req.body.password;
        let newpassword = password.trim();
        if(newpassword != "" && newuserid != ""){
            const data= await NonTechStaff.findOne({staffUniqueId:newuserid});
            if(data != null){
                let hashedPassword = data.staffPassword;
                bcrypt.compare(newpassword,hashedPassword,(err,result)=>{
                    if(result){
                        jwt.sign({Staff:data.staffUniqueId},'STJSEC',{expiresIn:'10m'},(err,token)=>{
                           
                            res.status(200).json({message:"Login Successfull",token});
                        })
                        
                    }else{
                        res.status(200).json({message:"Password Didn't match"});
                    }
                })
            }else{
                res.status(200).json({message:"Userid is not correct.."})
            }
            
        }else{
            res.status(200).json({message:"Incorrect userid or password"})
        }
    }catch(err){
        res.status(500).send(err);
    }
});

function verifyToken(req,res,next){
    req.Token = req.body.token;
    next();
}

module.exports = router;
    

