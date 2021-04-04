const mongoose = require('mongoose');

const NonTechStaffSchema = new mongoose.Schema({
    staffUniqueId:{
        type:String
    },
    staffName:{
        type:String
    },
    staffAge:{
        type:String
    },
    staffSex:{
        type:String
    },
    staffDesignation:{
        type:String
    },
    staffAddress:{
        type:String
    },
    staffPhno:{
        type:String
    },
    staffPassword:{
        type:String
    }
});
const NonTechStaff = mongoose.model('Nontechnicalstaff',NonTechStaffSchema);
module.exports = NonTechStaff;