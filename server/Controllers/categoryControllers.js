const Category = require('../Models/Category')

module.exports = {
    getAll: async (req, res) => {
        try {
            const candidate = await Category.find()
            res.status(200).json(candidate)
        } catch (error) {
            res.status(409).json(error)
        }
    },
    getById: async  (req, res) => {
        try {
            const candidate = await Category.findById(req.params.id)
            if(candidate) {
                res.status(200).json(candidate)
            }
            else {
                res.status(404).json({
                    message: "Категория не найдена"
                })
            }
        } catch (error) {
            res.status(409).json(error)
        }

    },
    create: async (req, res) => {
        try {
            const candidate = await Category.findOne({nameCategory: req.body.nameCategory})
            if(candidate) {
                res.status(409).json({
                    message: "Такая категория уже существует"
                })
            }
            else {
                const category = new Category({
                    nameCategory: req.body.nameCategory
                })
                await category.save()
                res.status(200).json({
                    message: "Категория успешно добавлена"
                })
            }
        } catch (error) {
            res.status(409).json(error)
        }
    },
    delete: async (req, res) => {
        try {
            const candidate = Category.findByIdAndDelete(req.params.id)
            if(candidate) {
                await Category.findByIdAndDelete(req.params.id)
                res.status(200).json({
                    message: "Категория успешно удалена"
                })
            }
            else {
                res.status(404).json({
                    message: "Категория не найдена"
                })
            }
        } catch (error) {
            res.status(404).json(error)   
        }
    }
}