const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('./mongoConnection');
const studentRouter = require('./routes/studentRoutes');
const demoRouter = require('./routes/DemoRoute');
const teacherRouter = require('./routes/teacherRoute');
const StudentRegRouter = require('./routes/studentRegistrationRoute');
const TeacherRegRouter = require('./routes/teacherRegistrationRoute');
const stateSubMarksRouter = require('./routes/stateSubjectsMarksRoute');
const nonTechStaffRouter = require('./routes/nonTechStaffRoute');
const cbsmRouter = require('./routes/cbsmRoute');

app.use(express.json());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET,POST,HEAD,PUT,OPTIONS,PATCH,DELETE");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    next();
});
app.use('/stddet',studentRouter);
app.use('/demo',demoRouter);
app.use('/tecdet',teacherRouter)
app.use('/studentreg',StudentRegRouter);
app.use('/teacherreg',TeacherRegRouter);

app.use('/statestudmarks',stateSubMarksRouter);
app.use('/nontechstaffdet',nonTechStaffRouter);
app.use('/cbscmarks',cbsmRouter);
app.listen(3000,console.log('Server listening in port number 3000'));