const mongoose = require('mongoose');
require('dotenv').config();
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify:true,useFindAndModify:false}).then(()=>console.log('Database Connected....')).catch((err)=>{
    console.log(err);
});
