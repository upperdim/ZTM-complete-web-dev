const handleProfileGet = (req, res, db) => {
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
}

module.exports = {
	handleProfileGet: handleProfileGet
}
