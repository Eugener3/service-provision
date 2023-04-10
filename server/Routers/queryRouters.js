const express = require('express')
const router = express.Router()
const queryControllers = require('../Controllers/queryControllers')

router.get("/", queryControllers.getAll)
router.get("/:id", queryControllers.getById)
router.get("/bycategory/:id", queryControllers.getByCategory)
router.get("/byuser/:id", queryControllers.getByUser)
router.post("/newCandidate", queryControllers.create)
router.delete('/:id', queryControllers.delete)
router.patch('/:id', queryControllers.update)

module.exports = router