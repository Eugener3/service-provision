const express = require('express')
const router = express.Router()

const authControllers = require('../Controllers/authControllers')
const unauth = require('../middlewares/unauth')

router.post('/login',unauth.valid,  authControllers.login)
router.post('/register',unauth.valid, authControllers.register)

module.exports = router