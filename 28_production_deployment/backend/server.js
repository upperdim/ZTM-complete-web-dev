// Below is a highly insecure server and is for educational purposes only!
const express = require('express')
const bcrypt = require('bcrypt-nodejs') // not the best but works on all OS'es so educational purposes only
const cors = require('cors')
const dbPassword = require('./dbPassword.js')
const knex = require('knex')

const register = require('./controllers/register.js')
const signin = require('./controllers/signin.js')
const profile = require('./controllers/profile.js')

const db = knex({
	client: 'pg',                        // pg stands for postgresSQL
	connection: {
		host: '127.0.0.1',               // localhost is 127.0.0.1
		user: 'postgres',                // your db user
		// port: 3000,                      // 
		password: dbPassword.dbPassword, // export from this file in order to avoid pushing it to github
		database: 'smart-brain'          // postgresql database name that we picked
	}
})

// console.log(db.select('*').from('users').then(data => console.log(data)))

const app = express()

app.use(express.json()) // for parsing JSON request bodies
app.use(cors()) // browser will give error if we won't use this (security related). Read 25_notes.txt

app.get('/', (req, res) => { res.send('success') })

app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt) })

// Below is a dependency injection. We're passing dependencies of the function into it.
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })

app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db) })

// PUT is for updating
app.put('/image', (req, res) => {
	const { id } = req.body
	db('users')
		.where('id', '=', id)
		.increment('entries', 1)
		.returning('entries')
		.then(entries => {
			res.json(entries[0].entries)
		})
		.catch(err => res.status(400).json('unable to get entries'))
})

app.listen(3000, () => {
	// This func runs just after it starts listening
	console.log('Server is listening to port 3000')
})