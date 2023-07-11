const express = require('express')
const bodyParser = require('body-parser')

//Initializations

const app = express()

//Settings

app.set('port', process.env.PORT || 4000)

//MiddleWares

app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json({ limit: '50mb' }))

//routes

app.use(require('./routes/index.routes'))
module.exports = app