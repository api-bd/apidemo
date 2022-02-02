const express = require('express')
const app = express()

// Node.js Application IP and PORT
let appPort = 4000
let appIP = '0.0.0.0'

const bodyParser = require('body-parser')
app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})) // support encoded bodies

require('./routes/sendsms')(express, app)
require('./routes/sendjson')(express, app)

app.listen(appPort, appIP, () => {
    console.log('Server Connected to http://0.0.0.0:' + appPort)
})