const express = require('express')
const bcrypt = require('bcrypt-nodejs')
const cors = require('cors')
const dbPassword = require('./dbPassword.js')
const knex = require('knex')

const register = require('./controllers/register.js')
const signin = require('./controllers/signin.js')
const profile = require('./controllers/profile.js')
const image = require('./controllers/image.js')

const db = knex({
	client: 'pg',
	connection: {
		host: '127.0.0.1',
		user: 'postgres',
		// port: 3000,
		password: dbPassword.dbPassword,
		database: 'smart-brain'
	}
})

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => { res.send('success') })
// Below will call the first arrow function first. Which returns another function
// that is (req, res) => {...}. So that we can use it like this neatly.
// (req, res) that comes into 2nd parameter of `post()` will automatically be used like so.
app.post('/signin', signin.handleSignin(db, bcrypt))
// Below is a dependency injection. We're passing dependencies of the function into it.
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db) })
app.put('/image', (req, res) => image.handleImage(req, res, db))
app.post('/imageurl', (req, res) => image.handleApiCall(req, res))

app.listen(3000, () => { console.log('Server is listening to port 3000') })
