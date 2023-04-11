const Query = require('../Models/Query')
const jwt = require("jsonwebtoken")

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
    // ЗАПРОС НЕПРАВИЛЬНЫЙ
    getByCategory: async (req, res) => {
        try {
            const candidate = await Query.find({category: req.params.id})
            res.status(200).json(candidate)
        } catch (error) {
            res.status(409).json(error)
        }
    },
    // ЗАПРОС НЕПРАВИЛЬНЫЙ
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
            const token = req.headers.authorization.split(' ')[1]
            const decodedData = jwt.verify(token, process.env.SECRET_KEY)
            const query = new Query({
                refUser: decodedData.idUser,
                title: req.body.title,
                description: req.body.description,
                place: req.body.place,
                priceOf: req.body.priceOf,
                priceAf: req.body.priceAf,
                deadline: req.body.deadline,
                category: req.body.category
            })
            await query.save()
            res.status(200).json({
                message: "Заявка успешно добавлена"
            })
        } catch (error) {
            console.log(error)
            res.status(409).json({
                message: "Ошибка при добавлении заявки"
            })
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
                    title: req.body.title,
                    description: req.body.description,
                    place: req.body.place,
                    priceOf: req.body.priceOf,
                    priceAf: req.body.priceAf,
                    deadline: req.body.deadline,
                    category: req.body.category
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
    },
    addResponded: async (req, res) => {
        try {
            const candidate = await Query.findById(req.params.id)
             if(candidate) {
                const token = req.headers.authorization.split(' ')[1]
                const decodedData = jwt.verify(token, process.env.SECRET_KEY)
                const update =  {
                    $push: {responded: decodedData.idUser}
                }
                await Query.updateOne({_id: req.params.id}, update, {
                    new: true
                  })
                res.status(200).json({
                    message: "Уведомление оправлено"
                })
             }
             else {
                res.status(409).json({
                    message: "Ошибка"
                })
             }
        } catch (error) {
            console.log(error)
            res.status(409).json({
                message: "Queries error"
            })
        }
    }
}