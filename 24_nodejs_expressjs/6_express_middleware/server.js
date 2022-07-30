const express = require('express')

const app = express()

// Middleware: will modify the incoming request before it is processed by its function `app.use(req, res, next) => {...}`
app.use((req, res, next) => {
	console.log('HELLO MIDDLEWARE')
	next() // need to call this or users' browser will hang, respective .get() handler won't be called.
})

app.get('/', (req, res) => {
	res.send('<h2>testtest</h2>') // Automatically does JSON.stringify()
})

const portNum = 3000
app.listen(portNum)
