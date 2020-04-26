const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const userRoute = require('./routes/user');
require('dotenv').config();

const pool = require('./db');

const app = express();

app.use(cors());
app.use(
	express.urlencoded({
		extended: false
	})
);
app.use(express.json());

//Redirect user endpoint to user.js
app.use('/user', userRoute);

app.listen(3000, () => {
	console.log('Server Running on 3000');
});
