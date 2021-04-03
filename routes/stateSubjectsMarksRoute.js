const router = require('express').Router()

const stateSubjectsMarks = require('../model/stateSubjectsMarks');

router.get('/',async(req,res)=>{
    try{
        const data = await stateSubjectsMarks.find({});
        res.status(200).send(data);
    }catch(err){
        res.status(400).send(err);
    }
});
router.post('/add',async(req,res)=>{
    try{
        if(req.body.test=="monthly test1    "){
            const mark = new stateSubjectsMarks({
                studentRegisterNumber:req.body.studentRegisterNumber,
                studentClass:req.body.studentClass,
                Kannada:[{
                    monthlyTest1:req.body.KannadamonthlyTest1,
                }],
                English:[{
                    monthlyTest1:req.body.EnglishmonthlyTest1
                }],
                Hindi:[{
                    monthlyTest1:req.body.HindihmonthlyTest1
                }],
                Mathematics:[{
                    monthlyTest1:req.body.MathematicshmonthlyTest1
                }],
                Science:[{
                    monthlyTest1:req.body.SciencemonthlyTest1
                }],
                SocialStudies:[{
                    monthlyTest1:req.body.SocialStudiesmonthlyTest1
                }]
            });
            const data = await stateSubjectsMarks.insertMany(mark);
            res.status(200).json({message:"Added",data:data});
        }
        else if(req.body.test == "monthly test2"){
            const mark = new stateSubjectsMarks({
                studentRegisterNumber:req.body.studentRegisterNumber,
                studentClass:req.body.studentClass,
                Kannada:[{
                    monthlyTest2:req.body.KannadamonthlyTest2
                }],
                English:[{
                    monthlyTest2:req.body.EnglishmonthlyTest2
                }],
                Hindi:[{
                    monthlyTest2:req.body.HindihmonthlyTest2
                }],
                Mathematics:[{
                    monthlyTest2:req.body.MathematicshmonthlyTest2
                }],
                Science:[{
                    monthlyTest2:req.body.SciencemonthlyTest2
                }],
                SocialStudies:[{
                    monthlyTest2:req.body.SocialStudiesmonthlyTest2
                }]
            });
            const data = await stateSubjectsMarks.insertMany(mark);
            res.status(200).json({message:"Added",data:data});
        }
        else if(req.body.test == "monthly test3"){
            const mark = new stateSubjectsMarks({
                studentRegisterNumber:req.body.studentRegisterNumber,
                studentClass:req.body.studentClass,
                Kannada:[{
                    monthlyTest3:req.body.KannadamonthlyTest3
                }],
                English:[{
                    monthlyTest3:req.body.EnglishmonthlyTest3
                }],
                Hindi:[{
                    monthlyTest3:req.body.HindihmonthlyTest3
                }],
                Mathematics:[{
                    monthlyTest3:req.body.MathematicshmonthlyTest3
                }],
                Science:[{
                    monthlyTest3:req.body.SciencemonthlyTest3
                }],
                SocialStudies:[{
                    monthlyTest3:req.body.SocialStudiesmonthlyTest3
                }]
            });
            const data = await stateSubjectsMarks.insertMany(mark);
            res.status(200).json({message:"Added",data:data});
        }
        else if(req.body.test == "monthly test4"){
            const mark = new stateSubjectsMarks({
                studentRegisterNumber:req.body.studentRegisterNumber,
                studentClass:req.body.studentClass,
                Kannada:[{
                    monthlyTest4:req.body.KannadamonthlyTest4
                }],
                English:[{
                    monthlyTest4:req.body.EnglishmonthlyTest4
                }],
                Hindi:[{
                    monthlyTest4:req.body.HindihmonthlyTest4
                }],
                Mathematics:[{
                    monthlyTes4:req.body.MathematicshmonthlyTest4
                }],
                Science:[{
                    monthlyTest4:req.body.SciencemonthlyTest4
                }],
                SocialStudies:[{
                    monthlyTest4:req.body.SocialStudiesmonthlyTest4
                }]
            });
            const data = await stateSubjectsMarks.insertMany(mark);
            res.status(200).json({message:"Added",data:data});
        }
        else if(req.body.test == "midTerm"){
            const mark = new stateSubjectsMarks({
                studentRegisterNumber:req.body.studentRegisterNumber,
                studentClass:req.body.studentClass,
                Kannada:[{
                    midTerm:req.body.KannadamidTerm
                }],
                English:[{
                    midTerm:req.body.EnglishmidTerm
                }],
                Hindi:[{
                    midTerm:req.body.HindihmidTerm
                }],
                Mathematics:[{
                    midTerm:req.body.MathematicshmidTerm
                }],
                Science:[{
                    midTerm:req.body.SciencemidTerm
                }],
                SocialStudies:[{
                    midTerm:req.body.SocialStudiesmidTerm
                }]
            });
            const data = await stateSubjectsMarks.insertMany(mark);
            res.status(200).json({message:"Added",data:data});
        }
        else if(req.body.test == "finalTerm"){
            const mark = new stateSubjectsMarks({
                studentRegisterNumber:req.body.studentRegisterNumber,
                studentClass:req.body.studentClass,
                Kannada:[{
                    finalTerm:req.body.KannadafinalTerm
                }],
                English:[{
                    finalTerm:req.body.EnglishfinalTerm
                }],
                Hindi:[{
                    finalTerm:req.body.HindihfinalTerm
                }],
                Mathematics:[{
                    finalTerm:req.body.MathematicshfinalTerm
                }],
                Science:[{
                    finalTerm:req.body.SciencefinalTerm
                }],
                SocialStudies:[{
                    finalTerm:req.body.SocialStudiesfinalTerm
                }]
            });
            const data = await stateSubjectsMarks.insertMany(mark);
            res.status(200).json({message:"Added",data:data});
        }
        else{
            res.status(400).json({message:"Invalid option ,please select proper option"});
        }
        

    }catch(err){
        res.status(400).send(err);
    }
})
module.exports = router;