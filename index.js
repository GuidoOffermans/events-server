const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const eventRouter = require('./event/router')
const Event = require('./event/model')

const app = express()

const corsMiddleware = cors()
app.use(corsMiddleware)

const bodyParserMiddelware = bodyParser.json()
app.use(bodyParserMiddelware)

app.use(eventRouter)

const port = 4000
app.listen(port, () => console.log(`running on port: ${port}`))