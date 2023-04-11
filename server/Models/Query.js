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
    place: {
        type: String,
        required: true,
        default: "Кемерово, кузнецкий пр-т д.40, кв.13"
    },
    priceOf: {
        type: String,
        required: true
    },
    priceAf: {
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
    },
    responded: [{
        ref: "users",
        type: Schema.Types.ObjectId
    }]
})

module.exports = mongoose.model("queries", querySchema)