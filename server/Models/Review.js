const mongoose = require('mongoose')
const {model} = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    refResume: {
        ref: "resumes",
        type: Schema.Types.ObjectId,
        required: true
    },
    refUser: {
        ref: "users",
        type: Schema.Types.ObjectId,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    otziv: {
        type: String
    },
    createData: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('reviews', reviewSchema)