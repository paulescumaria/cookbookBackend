const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: true
    },
    userPassword: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)