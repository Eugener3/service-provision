const Query = require('../Models/Query')

module.exports = {
    getAll: async (req, res) => {
        try {
            const candidate = await Query.find()
            res.status(200).json(candidate)
        } catch (error) {
            res.status(409).json(error)
        }
    },
    getById: async (req, res) => {
        try {
            const candidate = await Query.findById(req.params.id)
                res.status(200).json(candidate)

        } catch (error) {
            res.status(404).json({
                message: "Заявка не найдена"
            })
        }
    },
    getByCategory: async (req, res) => {
        try {
            const candidate = await Query.find({refCategory: req.params.id})
            res.status(200).json(candidate)
        } catch (error) {
            res.status(409).json(error)
        }
    },
    getByUser: async (req, res) => {
        try {
            const candidate = await Query.find({refUser: req.params.id})
            res.status(200).json(candidate)
        } catch (error) {
            res.status(409).json(error)
        }
    },
    create: async (req, res) => {
        try {
            const query = new Query({
                nameQuery: req.body.nameQuery,
                description: req.body.description,
                refCategory: req.body.refCategory,
                refUser: req.body.refUser,
                exp: req.body.exp,
                timeOfWork: req.body.timeOfWork,
                city: req.body.city
            })
            await query.save()
            res.status(200).json({
                message: "Заявка успешно добавлена"
            })
        } catch (error) {
            res.status(409).json(error)
        }
    },
    delete: async (req, res) => {
        try {
            const candidate = await Query.findById(req.params.id)
                await candidate.deleteOne({_id: req.params.id})
                res.status(200).json({
                    message: "Заявка успешно удалена"
                })

        } catch (error) {
            res.status(404).json({
                message: "Заявка не найдена"
            })
        }
    },
    update: async (req, res) => {
        try {
            const candidate = await Query.findById(req.params.id)
             if(candidate) {
                const update =  {
                    nameQuery: req.body.nameQuery,
                    description: req.body.description,
                    refCategory: req.body.refCategory,
                    exp: req.body.exp,
                    timeOfWork: req.body.timeOfWork,
                    city: req.body.city
                }
                await Query.updateOne({_id: req.params.id}, update, {
                    new: true
                  })
                res.status(200).json({
                    message: "Заявка успешно изменена"
                })
             }
             else {
                res.status(409).json({
                    message: "Ошибка"
                })
             }
        } catch (error) {
            res.status(404).json({
                message: "Заявка не найдена"
            })
        }
    }
}