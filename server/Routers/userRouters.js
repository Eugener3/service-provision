const userControllers = require('../Controllers/userControllers')
const express = require('express')
const router = express.Router()

router.get('/', userControllers.getAll)
router.get('/:id', userControllers.getbyId)
router.delete('/:id', userControllers.delete)

module.exports = router