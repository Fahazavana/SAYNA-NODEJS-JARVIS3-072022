const { compare } = require("bcryptjs");
const db = require("../models");
const parseError = require("../utilities/parseError");
const bcrypt = require("bcryptjs")
const saltRound = 10;
const jwt = require('jsonwebtoken');
const jwtSecret = '57bd26b48ac2793160c8ea5bc54cd97b32d5790f082e05e764af83124033277e8ab9b1';



const hashPassword = (password)=>{
	return bcrypt.hashSync(password,saltRound)
}

const getToken = () => {
	return "000000";
};

// Main Model
const User = db.users;

/**
* @openapi
* tags:
* name: Books
* description: API to manage your books.
*/

const addUser = async (req, res) => {
	let data = {
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		email: req.body.email,
		password: hashPassword(req.body.password),
		date_naissance: req.body.birthday
	};
	try {
		const user = await User.create(data);
		const token = jwt.sign({id:user.id,role:user.role,email:user.email},jwtSecret);
		res.status(200).send(user);
	} catch (err) {
		console.log(JSON.stringify(err));
		res.send(JSON.stringify(parseError(err)));
	}
};

const loginUser = async (req, res) => {
	let { email, password } = {
		email: req.body.email,
		password: req.body.password,
	};

	if (!password || !email) {
		res.status(400).json({ message: "password or email no provided" });
	}
	try {
		const user = await User.findOne({where : { email: email }});
		if (!user) {
			res.status(400).json("User not found");
		} else {
			bcrypt.compare(password, user.password).then((result) => {
				result
					? res
							.status(200)
							.json({ message: "Succefully loged", user })
					: res.status(200).json({ message: "Password incorrect" });
			});
		}
	} catch (err) {
		res.status(400).json(err);
	}
};

module.exports = {
	register:addUser,login:loginUser
}