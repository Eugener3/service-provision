const Resume = require('../Models/Query')
const jwt = require("jsonwebtoken")

module.exports = {
    getAll: async (req, res) => {
        try {
            const candidate = await Resume.find()
            res.status(200).json(candidate)
        } catch (error) {
            res.status(409).json(error)
        }
    },
    getByIdUser: async (req, res) => {
        try {
            const token = req.headers.authorization.split(' ')[1]
            const decodedData = jwt.verify(token, secret)
            const candidate = await Resume.findOne({refUser: decodedData.idUser})
                res.status(200).json(candidate)

        } catch (error) {
            res.status(404).json({
                message: "Заявка не найдена"
            })
        }
    },
    getByCategory: async (req, res) => {
        try {
            const candidate = await Resume.find({refCategory: req.params.id})
            res.status(200).json(candidate)
        } catch (error) {
            res.status(409).json(error)
        }
    },
    getByUser: async (req, res) => {
        try {
            const candidate = await Resume.find({refUser: req.params.id})
            res.status(200).json(candidate)
        } catch (error) {
            res.status(409).json(error)
        }
    },
    create: async (req, res) => {
        try {
            const token = req.headers.authorization.split(' ')[1]
            const decodedData = jwt.verify(token, secret)
            const candidate = await Resume.find({refUser: req.params.id})
            if(candidate) {
                res.status(409).json({
                    message: "У вас уже есть резюме"
                })
            }
            else {
                const resume = new Resume({
                    refUser: decodedData.idUser,
                    title: req.body.title,
                    avatarUrl: req.body.avatarUrl,
                    FIO: req.body.FIO,
                    telephone: req.body.telephone,
                    email: decodedData.email,
                    description: req.body.description
                    // refCategory: [userRole.value] РОДИОН ТЫ ГДЕ БЛЯТЬ
                })
                await query.save()
                res.status(200).json({
                    message: "Заявка успешно добавлена"
                })
            }
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
            const candidate = await Resume.findById(req.params.id)
             if(candidate) {
                const token = req.headers.authorization.split(' ')[1]
                const decodedData = jwt.verify(token, secret)
                const update =  {
                    title: req.body.title,
                    avatarUrl: req.body.avatarUrl,
                    FIO: req.body.FIO,
                    telephone: req.body.telephone,
                    description: req.body.description,
                    // refCategory: [userRole.value] РОДИОН ТЫ ГДЕ БЛЯТЬ
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