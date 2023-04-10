const mongoose = require('mongoose')
const {model} = require('mongoose')
const Schema = mongoose.Schema

const querySchema = new Schema({
    refUser: {
        ref: "users",
        type: Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    deadline: {
         type: Date
    },
    createData: {
        type: Date,
        default: Date.now,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("queries", querySchema)