require("dotenv").config();
const express = require('express');
const fs = require('fs');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const cors = require("cors");

const mongoose = require('mongoose');



const app = express();

//database connection
mongoose.connect('mongodb+srv://jugnulearn:Momdaani%4099@cluster0.p0epf.mongodb.net/sharmaStore3').then(() => {
    console.log('connected to db');
}).catch((err) => {
    console.log(err);
}   );

const PORT = process.env.PORT || 3000;

//middleware
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//routes
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);


//middleware

//controllers

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });