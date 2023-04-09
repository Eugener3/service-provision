const express = require('express')
const router = express.Router()

const categoryControllers = require('../Controllers/categoryControllers')

router.get('/', categoryControllers.getAll)
router.get('/:id', categoryControllers.getById)
router.post('/', categoryControllers.create)
router.delete('/:id', categoryControllers.delete)
router.patch('/:id', categoryControllers.update)

module.exports = router