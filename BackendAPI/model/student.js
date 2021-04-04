const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentRegisterNumber:{
        type:String
    },
    studentName:{
        type:String
    },
    studentBoard:{
      type:String
    },
    studentFatherName:{
        type:String
    },
    studentMotherName:{
        type:String
    },
    studentAge:{
        type:String
    },
    studentSex:{
        type:String
    },
    studentBloodGroup:{
        type:String
    },
    parentNumber:{
        type:String
    },
    studentParmanentAddress:{
        type:String
    },
    studentExistingAddress:{
        type:String
    },
    studentClass:{
        type:String
    },
    studentFee:{
        type:String
    }
});
const studentDetail = mongoose.model('Student',studentSchema);
module.exports = studentDetail;