const db = require("../models");

// Main Model
const User = db.users;

module.exports = {
	add: async (req, res) => {
		let data = {
			firstname:req.body.firestname,
			lastname:req.body.lastname,
			email:req.body.email,
			password:req.body.password
		};
		const user = await User.create(data);
		res.status(200).send(user);
	},
	list: async (req, res) => {
		let users = await User.findAll({});
		res.status(200).send(users);
	},
	getById: async (req, res) => {
		let id = req.params.id;
		let user = await User.findOne({
			where: { id: id },
		});
		res.status(200).send(user);
	},
	update: async (req, res) => {
		let id = req.params.id;
		let user = await User.update(req.body, {
			where: { id: id },
		});
		res.status(200).send(user);
	},
	delete: async (req, res) => {
		let id = req.params.id;
		await User.destroy({
			where: { id: id },
		});
		res.status(200).send(`User with id=${id} is deleted`);
	},
};
