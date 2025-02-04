const mongoose = require('mongoose');
//scema 

const userScheema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        default: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
    },
});

const User = mongoose.model('user', userScheema);

module.exports = User;