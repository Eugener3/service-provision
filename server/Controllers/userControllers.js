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
        
    }
}