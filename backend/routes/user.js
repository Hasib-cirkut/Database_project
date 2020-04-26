//This is user endpoint

const express = require('express');

const router = express.Router();

const db = require('../db.js');

router.get('/users', async (req, res) => {
	let resData = await db.query('select * from users');

	res.send(resData);
});

//end point for getting info from frond end to db
router.post('/registerUser', async (req, res) => {
	let { first_name, last_name, username, email, password } = req.body;

	console.log(req.body);

	let reData = await db.query(`insert into users values (?, ?, ?, ?, ?)`, [
		first_name,
		last_name,
		email,
		password,
		username
	]);

	if (reData.affectedRows === 1) {
		res.json({
			message: 'useradded'
		});
	}
});

module.exports = router;
