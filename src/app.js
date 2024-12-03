const express = require('express')

const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
require('./configs/initMongodb')
app.use('/',require('./router/index'))

app.use((req, res, next)=>{
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})
app.use ((error, req, res, next)=>{
    const statusCode = error.status || 500
    return res.status(statusCode).json({
        status: 'error',
        code: statusCode,
        stack: error.stack,
        message: error.message || 'Internal Server Error'
    })
})

module.exports = app