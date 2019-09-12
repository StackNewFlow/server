const express = require('express'),
    app = express()
    cors = require('cors'),
    routes = require('./routes/user')

app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())
app.use(cors())

app.use('/', routes)