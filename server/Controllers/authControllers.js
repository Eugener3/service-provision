require('dotenv').config()
const User = require('../Models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const SECRET_KEY = process.env.SECRET_KEY 

module.exports = {
    login: async (req, res) => {
        const candidate = await User.findOne({email: req.body.email})
        if(candidate) {
            if(await bcrypt.compare(req.body.password, candidate.password)) {
                const token = jwt.sign({
                    email: candidate.email,
                    idUser: candidate._id 
                }, SECRET_KEY, {expiresIn: '7d'})
                
                res.status(200).json(`Bearer ${token}`)
            }
            else {
                res.status(409).json({
                    message: "Пароль введён неверно"
                })
            }
        }
        else{
            res.status(409).json({
                message: "Пользователя с такой почтой не существует"
            })
        }
    },
    register: async (req, res) => {
        const candidate = await User.findOne({email: req.body.email})
        if(candidate) {
            res.status(409).json({
                message: "Пользователь с такой почтой уже существует"
            })
        }
        else {
            const salt = await bcrypt.genSalt(10)
            const password = req.body.password
            const user = new User({
                email: req.body.email,
                password: await bcrypt.hash(password, salt),
                FIO: req.body.FIO,
                number: req.body.number,
                age: req.body.age,
                education: req.body.education,
                contactTime: req.body.contactTime,
                avatarUrl: req.body.avatarUrl,
                description: req.body.description,
                city: req.body.city
            })
            try {
                user.save()
                res.status(200).json({
                    message: "Регистрация прошла успешно"
                })
            } catch (error) {
                res.status(409).json({
                    message: error
                })
            }

        }
    }
}