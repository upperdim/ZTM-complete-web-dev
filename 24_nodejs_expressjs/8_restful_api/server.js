const express = require('express')


const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/:id', (req, res) => {
	// Most used properties of the request
	// console.log(req.query)   // This is what we get when we do a GET query, test: http://localhost:3000/?name=zack&age=19
	// req.body                 // We have talked about this
	// console.log(req.headers) // Headers
	// console.log(req.params)  // Parameters of the URL. 
		// Signature of this function should be like `app.get('/:id', (req, res) => {`
		// in order for `req.params` to work. Then you visit http://localhost:3000/1234
		// and it will console log { id: '1234' }

	// response option `.status(<status number>)`
	res.status(404).send('getting root')
})

const portNum = 3000
app.listen(portNum)
