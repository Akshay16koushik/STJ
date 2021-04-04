const mongoose  = require('mongoose');

const studentRegistrationSchema = new mongoose.Schema({
    studentRegisterNumber:{
        type:String
    },
    studentImg:{
        data:Buffer,
        contentType:String
    },
    studentPassword:{
        type:String
    }
});

const studentRegistration = mongoose.model('StudentRegistration',studentRegistrationSchema);
module.exports = studentRegistration;