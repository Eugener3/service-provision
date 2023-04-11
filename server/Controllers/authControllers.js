require('dotenv').config()
const User = require('../Models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {validationResult} = require('express-validator')



const SECRET_KEY = process.env.SECRET_KEY 

module.exports = {
    login: async (req, res) => {
        try {
            const validErrors = validationResult(req);
            if (!validErrors.isEmpty()) {
                return res.status(400).json({message: validErrors.errors[0].msg})
            }
            const candidate = await User.findOne({login: req.body.login})
            if(candidate) {
                if(await bcrypt.compare(req.body.password, candidate.password)) {
                    const token = jwt.sign({
                        email: candidate.email,
                        login: candidate.login,
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
                    message: "Такого пользователя не существует"
                })
            }
        } catch (error) {
                console.log(error)
                res.status(409).json({
                    message: "Ошибка при авторизации"
                })
            
        }

    },
    register: async (req, res) => {
        try {
            const validErrors = validationResult(req);
            if (!validErrors.isEmpty()) {
                return res.status(400).json({message: validErrors.errors[0].msg})
            }
            if(await User.findOne({email: req.body.email})) {
                res.status(409).json({
                    message: "Пользователь с такой почтой уже существует"
                })
            }
            else if (await User.findOne({login: req.body.login})) {
                res.status(409).json({
                    message: "Пользователь с таким логином уже существует"
                })
            }
            else {
                    const salt = await bcrypt.genSalt(10)
                    const password = req.body.password
                    const user = new User({
                        login: req.body.login,
                        email: req.body.email,
                        password: await bcrypt.hash(password, salt),
                    })
                        user.save()
                        res.status(200).json({
                            message: "Регистрация прошла успешно"
                        })
            }
        } catch (error) {
            console.log(error)
            res.status(409).json({
                message: "Ошибка при регистрации"
            })
        }

    }
}
