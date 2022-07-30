const express = require('express')


const app = express()

app.use(express.static(__dirname + '/public'))

const portNum = 3000
app.listen(portNum)
