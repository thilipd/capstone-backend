const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,

    }

})


const usersModel = mongoose.model('users', usersSchema);

module.exports = usersModel;