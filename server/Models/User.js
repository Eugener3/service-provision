const mongoose = require('mongoose')
const {model} = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    login: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String
    },
    FIO: {
        type: String
    },
    telephone: {
        type: String,
    },
    bio: {
        type: String
    }
})

module.exports = mongoose.model('users', userSchema)
