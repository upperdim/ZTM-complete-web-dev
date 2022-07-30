const express = require('express')

const app = express()

app.get('/', (req, res) => {
	// res.send('<h1>hellooo</h1>')

	const data = {
		name: "Henry",
		hobby: "Bowling"
	}
	res.send(data) // Automatically does JSON.stringify()
})

app.get('/profile', (req, res) => {
	// res.send('<h1>hellooo</h1>')

	const data = {
		name: "Zack",
		hobby: "Cycling"
	}
	res.send(data) // Automatically does JSON.stringify()
})

app.post('/profile', (req, res) => {
	// res.send('<h1>hellooo</h1>')

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
