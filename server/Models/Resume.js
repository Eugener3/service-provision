const mongoose = require('mongoose')
const {model} = require('mongoose')
const Schema = mongoose.Schema

const resumeSchema = new Schema({
    refUser: {
        ref: "users",
        type: Schema.Types.ObjectId,
        required: true
    },
    avatarUrl: {
        type: String,
        required: true,
        default: "/Картинка"
    },
    FIO: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        default: "-"
    },
    description: {
        type: String
    },
    refCategory: [{
        type: String,
        ref: "categories"
    }]
})

module.exports = mongoose.model('resumes', resumeSchema)