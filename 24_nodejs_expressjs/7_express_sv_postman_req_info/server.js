const express = require('express')

const app = express()

// We have to use this middleware otherwise x-www-formd-urlencoded requests will show up as undefined
app.use(express.urlencoded({extended: false}))

// We have to use this middleware otherwise raw json requests will show up as {}
app.use(express.json())

app.get('/', (req, res) => {
	res.send('getting root')
})

app.get('/profile', (req, res) => {
	res.send('getting profile')
})

app.post('/profile', (req, res) => {
	console.log(req.body) // Access POST info

	const data = {
		name: "Sally",
		hobby: "Soccer"
	}
	res.send(data) // Automatically does JSON.stringify()
})

app.delete('/profile', (req, res) => {
	// res.send('<h1>hellooo</h1>')

	const data = {
		name: "Sally",
		hobby: "Soccer"
	}
	res.send(data) // Automatically does JSON.stringify()
})

const portNum = 3000
app.listen(portNum)
