const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const passport = require('passport')

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use(passport.initialize())
require('./middlewares/passport')(passport)

const authRouters = require('./Routers/authRouters')
const queryRouters = require('./Routers/queryRouters')
const categoryRouters = require('./Routers/categoryRouters')
const userRouters = require('./Routers/userRouters')
const resumeRouters = require('./Routers/resumeRouters')

app.use('/api/auth', authRouters)
app.use('/api/query', queryRouters)
app.use('/api/category', categoryRouters)
app.use('/api/user', userRouters)
app.use('/api/resume', resumeRouters)


module.exports = app