const express = require('express')

//Initializations

const app = express()

//Settings

app.set('port', process.env.PORT || 4000)

//MiddleWares

app.use(express.urlencoded({extended: false}))

//routes

app.get('/', (req, res) => {
    res.send('hello World')
})
module.exports = app