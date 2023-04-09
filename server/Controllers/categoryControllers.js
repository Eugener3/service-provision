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
    }
}