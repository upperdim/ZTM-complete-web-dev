// Imagine we're getting this request from front-end
// {
//     "email": "john@gmail.com",
//     "password": "cookies"
// }
const handleSignin = (db, bcrypt) => (req, res) => {
	const { email, password } = req.body
	// Validation
	if (!email || !password) {
		return res.status(400).json('incorrect form submission')
	}
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
}

module.exports = {
	handleSignin: handleSignin
}
