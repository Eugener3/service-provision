const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const passport = require('passport')
const serverless = require('serverless-http')

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use(passport.initialize())
require('../middlewares/passport')(passport)

const authRouters = require('../Routers/authRouters')
const queryRouters = require('../Routers/queryRouters')
const categoryRouters = require('../Routers/categoryRouters')
const userRouters = require('../Routers/userRouters')
const resumeRouters = require('../Routers/resumeRouters')

app.use('/api/auth', authRouters)
app.use('/api/query', queryRouters)
app.use('/api/category', categoryRouters)
app.use('/api/user', userRouters)
app.use('/api/resume', resumeRouters)

app.use('/.netlify/functions/api/auth', authRouters)
app.use('/.netlify/functions/query', queryRouters)
app.use('/.netlify/functions/category', categoryRouters)
app.use('/.netlify/functions/user', userRouters)
app.use('/.netlify/functions/resume', resumeRouters)



module.exports = app