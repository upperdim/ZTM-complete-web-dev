// Below is a highly insecure server and is for educational purposes only!
const express = require('express')
const bcrypt = require('bcrypt-nodejs') // not the best but works on all OS'es so educational purposes only
const cors = require('cors')
const dbPassword = require('./dbPassword.js')
const knex = require('knex')

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

app.get('/', (req, res) => {
	res.send('success')
})

// Imagine we're getting this request from front-end
// {
//     "email": "john@gmail.com",
//     "password": "cookies"
// }
app.post('/signin', (req, res) => {
	db.select('email', 'hash').from('login')
		.where('email', '=', req.body.email)
		.then(data => {
			const isValid = bcrypt.compareSync(req.body.password, data[0].hash)
			if (isValid) {
				// Return below so that "upper db.select() knows about it", works without it regardless...
				return db.select('*').from('users')
					.where('email', '=', req.body.email)
					.then(user => res.json(user[0]))
					.catch(err => res.status(400).json('unable to get user'))
			} else {
				res.status(400).json('wrong credentials')
			}
		})
		.catch(err => res.status(400).json('wrong credentials'))
})

app.post('/register', (req, res) => {
	// Create a user with incoming info
	const { email, name, password } = req.body
	const hash = bcrypt.hashSync(password)
	// Chain 2 db operations together so if one fails, other one should too.
	// This is for avoiding inconsistencies, read 27_notes.txt
	db.transaction(trx => {
		trx.insert({
			hash: hash,
			email: email
		})
		.into('login')
		.returning('email')
		.then(loginEmail => {
			// Our `users` table in the database has columns:
			//     id     : auto increments, we don't need to provide it
			//     name   : which we provide
			//     email  : which we provide
			//     entries: that defaults to 0, so we don't need to provide it
			//     date   : which we provide as the current date
			trx('users')
			.returning('*') // after inserting, return/response with all rows that have been inserted (will insert only 1 anyway)
			.insert({
				email: loginEmail[0].email,
				name: name,
				joined: new Date()
			})
			.then(result => {
				// result was the new user that has been inserted
				res.json(result[0]) // Return the created user
				// result is all the newly inserted values. we insert only 1 so it's always an array of 1. 
				// we still return only the first element instead of sending the array form
			})
			.catch(err => res.status(400).json('unable to register'))
		})
		.then(trx.commit)
		.catch(trx.rollback)
	})
})

app.get('/profile/:id', (req, res) => {
	// Destructure profile id from the request param
	const { id } = req.params
	db.select('*').from('users').where({id: id})
		.then(user => {
			// That id was not found
			if (user.length === 0) {
				// We can't use `.catch()` to check if no users was found because
				// instead of giving an error, database will simply return an empty array
				res.status(404).json('no such user')
			}
			res.json(user[0])
		})
		.catch(err => res.status(400).json('error getting user'))
})

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