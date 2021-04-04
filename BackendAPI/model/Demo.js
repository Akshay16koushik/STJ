const mongoose = require('mongoose');
// const ttl = require('mongoose-ttl');
const demoSchema = new mongoose.Schema({
    Updates:String,
    createdAt:{type:Date,expires:'20s',default:Date.now}
    
});
//  demoSchema.index({createdAt:1},{expireAfterSeconds:60})
// demoSchema.plugin(ttl,{ttl:60000})
const demo = mongoose.model('demo',demoSchema);
module.exports = demo; 