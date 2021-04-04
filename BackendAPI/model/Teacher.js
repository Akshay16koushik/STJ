const mongoose = require('mongoose');
const teacherSchema = new mongoose.Schema({
    teacherUniqId:{
        type:String
    },
    teacherBoard:{
        type:String
    },
    teacherName:{
        type:String
    },
    teacherBoard:{
        type:String
    },
    teacherSex:{
        type:String
    },
    teacherAge:{
        type:String
    },
    teacherSubject:[{
        type:String
    }],
    teacherDesignation:{
        type:String
    },
    teacherAddress:{
        type:String
    },
    teacherPhonenumber:{
        type:String
    },
    teacherImg:{
        data:Buffer
    },
    teacherAssignedClasses:[{
        type:String
    }],
    
});
const teacherDetail = mongoose.model('Teacher',teacherSchema);
module.exports = teacherDetail;