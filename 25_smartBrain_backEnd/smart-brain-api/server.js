// Below is a highly insecure server and is for educational purposes only!
const express = require('express')

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
	]
}

app.use(express.json()) // for parsing JSON request bodies 

app.get('/', (req, res) => {
	res.send(database.users)
})

app.post('/signin', (req, res) => {
	// Imagine we're getting this request from front-end
	// {
	//     "email": "john@gmail.com",
	//     "password": "cookies"
	// }
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