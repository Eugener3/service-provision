const mongoose = require('mongoose')
const {model} = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true
    },  
    FIO: {
        type: String,
        required: true
    },
    number: {
        type: String
    },
    age: {
        type: Number,
        required: true,
        default: 18
    },
    education: {
        type: String,
        default: "None"
    },
    contactTime: {
        type: String,
        default: "None"
    },
    avatarUrl: {
        type: String,
        default: "/Картинка"
    },
    description: {
        type: String,
        default: "None"
    },
    city: {
        type: String,
        default: "Кемерово"
    }
})

module.exports = mongoose.model('users', userSchema)
