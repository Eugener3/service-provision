const express = require('express')
const router = express.Router()
const resumeControllers = require('../Controllers/resumeControllers')
const passport = require('passport')

router.get("/", passport.authenticate('jwt', {session: false}), resumeControllers.getAll)
router.get("/:id", passport.authenticate('jwt', {session: false}), resumeControllers.getById)
router.get("/bycategory/:id", passport.authenticate('jwt', {session: false}), resumeControllers.getByCategory)
router.get("/byuser/:id", passport.authenticate('jwt', {session: false}), resumeControllers.getByUser)
router.post("/newCandidate", passport.authenticate('jwt', {session: false}), resumeControllers.create)
router.delete('/:id', passport.authenticate('jwt', {session: false}), resumeControllers.delete)
router.patch('/:id', passport.authenticate('jwt', {session: false}), resumeControllers.update)

module.exports = router