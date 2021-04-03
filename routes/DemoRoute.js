const router = require('express').Router();
const Demo = require('../model/Demo');


router.get('/',async(req,res)=>{
    try{
        // let today = new Date();
        // let stringtoday = today.toString();
        // console.log(stringtoday);
        const data = await Demo.find({});
        console.log(data);
        res.status(200).json({message:"Success",data:data});
    }catch(err){
        res.status(500).send(err);
    }
})

router.post('/add',async(req,res)=>{
    try{
        const dem = new Demo({
            Updates:req.body.Updates
        });
        const data = await Demo.insertMany(dem);
        res.status(200).json({message:"Added",data:data});
    }catch(err){
        res.status(500).send(err);
    }
    
});
module.exports = router;   