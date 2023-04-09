const Query = require('../Models/Query')

module.exports = {
    getAll: async (res, req) => {
        try {
            const candidate = await Query.find()
            res.status(200).json(candidate)
        } catch (error) {
            res.status(409).json(error)
        }
    },
    create: async (req, res) => {
        try {
            const candidate = await Query.findOne({req.body})
        } catch (error) {
            res.status(409).json(error)
        }
    } 
}