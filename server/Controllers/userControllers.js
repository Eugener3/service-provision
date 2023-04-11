const User = require('../Models/User')

module.exports = {
    getAll: async (req, res) => {
        try {
            const candidate = await User.find()
            res.status(200).json(candidate)
        } catch (error) {
            res.status(404).json({
                message: "Пользователей нет"
            })
        }
    },
    getbyId: async (req, res) => {
        try {
            const candidate = await User.findById(req.params.id)
            if(candidate) {
                res.status(200).json(candidate)
            }
            else {
                res.status(404).json({
                    message: "Пользователь не найден"
                })
            }
        } catch (error) {
            res.status(409).json(error)
        }
    },
    delete: async (req, res) => {
        try {
            const candidate = User.findById(req.params.id)
                await User.findByIdAndDelete(req.params.id)
                res.status(200).json({
                    message: "Пользователь успешно удален"
                })
        } catch (error) {
            res.status(404).json({
                message: "Пользователь не найден"
            })   
        }
    },
    update: async (req, res) => {
        try {
            const candidate = await User.findById(req.params.id)
             if(candidate) {
                const update =  {
                    FIO: req.body.FIO,
                    telephone: req.body.telephone,
                    bio: req.body.bio
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
    changePassword: async (req, res) => {
        try {
            const candidate = await User.findById(req.params.id)
             if(candidate) {
                const token = req.headers.authorization.split(' ')[1]
                const decodedData = jwt.verify(token, secret)
                const update =  {
                    FIO: req.body.FIO,
                    telephone: req.body.telephone,
                    bio: req.body.bio
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