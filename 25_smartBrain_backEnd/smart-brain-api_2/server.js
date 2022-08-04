// Below is a highly insecure server and is for educational purposes only!
const express = require('express')
const bcrypt = require('bcrypt-nodejs') // not the best but works on all OS'es so educational purposes only
const cors = require('cors')

const app = express()

const database = {
	users: [
		{
			id: '123',
			name: 'John',
			email: 'john@gmail.com',
			password: 'cookies',
			entries: 0,
			joined: new Date()
		},
		{
			id: '124',
			name: 'Sally',
			email: 'sally@gmail.com',
			password: 'bananas',
			entries: 0,
			joined: new Date()
		}
	],
	login: [
		{
			id: '789',
			hash: '',
			email: 'john@gmail.com'
		}
	]
}

app.use(express.json()) // for parsing JSON request bodies
app.use(cors()) // browser will give error if we won't use this (security related). Read 25_notes.txt

app.get('/', (req, res) => {
	res.send(database.users)
})

app.post('/signin', (req, res) => {
	// Imagine we're getting this request from front-end
	// {
	//     "email": "john@gmail.com",
	//     "password": "cookies"
	// }
	// Load hash from your password database
	bcrypt.compare("apples", '$2a$10$G/aCQara1STpSxhQdViqf.dLG/AGoFQPZ1Ucye90Rj/cL.gj6Mkeq', function(err, res) {
		console.log('first guess', res)
	})
	bcrypt.compare("veggies", '$2a$10$G/aCQara1STpSxhQdViqf.dLG/AGoFQPZ1Ucye90Rj/cL.gj6Mkeq', function(err, res) {
		console.log('second guess', res)
	})
	if (req.body.email === database.users[0].email
		&& req.body.password === database.users[0].password) {
		res.json('success')
	} else {
		res.status(400).json('error logging in')
	}
})

app.post('/register', (req, res) => {
	// Create user with incoming info
	const { email, name, password } = req.body
	// Store hash in your password database
	bcrypt.hash("apples", null, null, function(err, hash) {
		console.log(hash)
	})
	database.users.push({
		id: '125',
		name: name,
		email: email,
		password: password,
		entries: 0,
		joined: new Date()
	})
	// Return the created user
	res.json(database.users[database.users.length-1])
})

app.get('/profile/:id', (req, res) => {
	// Destructure profile id from the request param
	const { id } = req.params
	// Search users for that id
	database.users.forEach(user => {
		if (user.id === id) {
			return res.json(user)
		}
	})
	// That id was not found
	res.status(404).json('no such user')
})

app.post('/image', (req, res) => {
	const { id } = req.body
	database.users.forEach(user => {
		if (user.id === id) {
			user.entries++
			return res.json(user.entries)
		}
	})
	res.status(404).json('no such user')
})






app.listen(3000, () => {
	// This func runs just after it starts listening
	console.log('Server is listening to port 3000')
})