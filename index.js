const express = require('express');
// const tasks = require('./task.json');


const fs = require('fs');
const userRouter = require('./routes/taskRoute');
const mongoose = require('mongoose');



const app = express();

//database connection
mongoose.connect('mongodb+srv://jugnulearn:Momdaani%4099@cluster0.p0epf.mongodb.net/sharmaStore2').then(() => {
    console.log('connected to db');
}).catch((err) => {
    console.log(err);
}   );

const PORT = process.env.PORT || 3000;

//middleware
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api/task', userRouter);


//middleware

//controllers

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });