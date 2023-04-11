const userControllers = require('../Controllers/userControllers')
const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/', passport.authenticate('jwt', {session: false}), userControllers.getAll)
router.get('/:id', passport.authenticate('jwt', {session: false}), userControllers.getbyId)
router.delete('/:id', passport.authenticate('jwt', {session: false}), userControllers.delete)

module.exports = router