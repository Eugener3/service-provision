const express = require('express')
const router = express.Router()
const {check} = require('express-validator')

const authControllers = require('../Controllers/authControllers')
const unauth = require('../middlewares/unauth')

router.post('/login', [
    check('login', "Поле логин не заполнено").notEmpty(),
    check('password', "Поле пароль не заполнено").notEmpty(),
], unauth.valid, authControllers.login)
router.post('/register', [
    check('login', "Поле логин не заполнено").notEmpty(),
    check('email', "Поле почта не заполнено").notEmpty(),
    check('password', "Поле пароль не заполнено").notEmpty(),
], unauth.valid, authControllers.register)

module.exports = router