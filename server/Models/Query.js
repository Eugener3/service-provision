const mongoose = require('mongoose')
const {model} = require('mongoose')
const Schema = mongoose.Schema

const querySchema = new Schema({
    nameQuery: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: "none"
    },
    refCategory: {
        ref: "categories",
        type: Schema.Types.ObjectId,
        required: true
    },
    refUser: {
        ref: "users",
        type: Schema.Types.ObjectId,
        required: true
    },
    exp: {
        type: String,
        default: "None"
    },
    timeOfWork: {
        type: String,
        default: "None"
    },
    city: {
        type: String,
        required: true,
        default: "None"
    }
})

module.exports = mongoose.model("queries", querySchema)