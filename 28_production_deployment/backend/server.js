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
app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt) })
// Below is a dependency injection. We're passing dependencies of the function into it.
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db) })
app.put('/image', (req, res) => image.handleImage(req, res, db))

app.listen(3000, () => { console.log('Server is listening to port 3000') })
