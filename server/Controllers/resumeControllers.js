const Resume = require('../Models/Resume')
const jwt = require("jsonwebtoken")

module.exports = {
    getAll: async (req, res) => {
        try {
            const candidate = await Resume.find()
            res.status(200).json(candidate)
        } catch (error) {
            console.log(error)
            res.status(409).json({
                message: "Resumes error"
            })
        }
    },
    getById: async (req, res) => {
        try {
            const candidate = await Query.findById(req.params.id)
                res.status(200).json(candidate)
        } catch (error) {
            console.log(error)
            res.status(409).json({
                message: "Resumes error"
            })
        }
    },
    getByUser: async (req, res) => {
        try {
            const token = req.headers.authorization.split(' ')[1]
            const decodedData = jwt.verify(token, process.env.SECRET_KEY)
            const candidate = await Resume.findOne({refUser: decodedData.idUser})
                res.status(200).json(candidate)

        } catch (error) {
            console.log(error)
            res.status(409).json({
                message: "Resumes error"
            })
        }
    },
    getByCategory: async (req, res) => {
        try {
            const candidate = await Resume.find({refCategory: req.params.id})
            res.status(200).json(candidate)
        } catch (error) {
            console.log(error)
            res.status(409).json({
                message: "Resumes error"
            })
        }
    },
    create: async (req, res) => {
        try {
            const token = req.headers.authorization.split(' ')[1]
            const decodedData = jwt.verify(token, process.env.SECRET_KEY)
            const existingResume = await Resume.findOne({ refUser: decodedData.idUser })
            if (existingResume) {
                res.status(409).json({
                  message: "У вас уже есть резюме"
                });
              }
            else {
                const resume = new Resume({
                    refUser: decodedData.idUser,
                    avatarUrl: req.body.avatarUrl,
                    FIO: req.body.FIO,
                    telephone: req.body.telephone,
                    email: req.body.email,
                    description: req.body.description
                    // refCategory: [userRole.value] РОДИОН ТЫ ГДЕ БЛЯТЬ
                })
                await resume.save()
                res.status(200).json({
                    message: "Резюме успешно создано"
                })
            }
        } catch (error) {
            console.log(error)
            res.status(409).json({
                message: "Resumes error"
            })
        }
    },
    delete: async (req, res) => {
        try {
            const candidate = await Resume.findOne({refUser: decodedData.idUser})
                await candidate.deleteOne({_id: req.params.id})
                res.status(200).json({
                    message: "Резюме успешно удалено"
                })

        } catch (error) {
            console.log(error)
            res.status(409).json({
                message: "Resumes error"
            })
        }
    },
    update: async (req, res) => {
        try {
            const candidate = await Resume.findOne({_id: req.params.id})
             if(candidate) {
                const token = req.headers.authorization.split(' ')[1]
                const decodedData = jwt.verify(token, process.env.SECRET_KEY)
                const update =  {
                    avatarUrl: req.body.avatarUrl,
                    FIO: req.body.FIO,
                    telephone: req.body.telephone,
                    description: req.body.description,
                    // refCategory: [userRole.value] РОДИОН ТЫ ГДЕ БЛЯТЬ
                }
                await Resume.updateOne({_id: req.params.id}, update, {
                    new: true
                  })
                res.status(200).json({
                    message: "Резюме успешно изменено"
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
                message: "Resumes error"
            })
        }
    }
}