const mongoose = require('mongoose');

const teacherRegistrationSchema = new mongoose.Schema({
    teacherUniqueId:{
        type:String
    },
    teacherPassword:{
        type:String
    }
});
const TeacherReg = mongoose.model('teacherRegistration',teacherRegistrationSchema);
module.exports = TeacherReg;