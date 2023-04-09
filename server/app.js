const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

const authRouters = require('./Routers/authRouters')
const queryRouters = require('./Routers/queryRouters')
const categoryRouters = require('./Routers/categoryRouters')

app.use('/api/auth', authRouters)
//app.use('/api/query', queryRouters)
//app.use('/api/category', categoryRouters)



module.exports = app