const express = require('express')
const router = express.Router()
const queryControllers = require('../Controllers/queryControllers')
const passport = require('passport')

router.get("/", passport.authenticate('jwt', {session: false}),queryControllers.getAll)
router.get("/:id", passport.authenticate('jwt', {session: false}), queryControllers.getById)
router.get("/bycategory/:id", passport.authenticate('jwt', {session: false}), queryControllers.getByCategory)
router.get("/byuser/:id", passport.authenticate('jwt', {session: false}), queryControllers.getByUser)
router.post("/newCandidate", passport.authenticate('jwt', {session: false}), queryControllers.create)
router.delete('/:id', passport.authenticate('jwt', {session: false}), queryControllers.delete)
router.patch('/:id', passport.authenticate('jwt', {session: false}), queryControllers.update)

module.exports = router