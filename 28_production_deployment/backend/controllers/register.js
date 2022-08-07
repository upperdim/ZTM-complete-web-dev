const handleRegister = (req, res, db, bcrypt) => {
	// Create a user with incoming info
	const { email, name, password } = req.body
	// Validation
	if (!email || !name || !password) {
		return res.status(400).json('incorrect form submission')
	}
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
}

module.exports = {
	handleRegister: handleRegister
}
