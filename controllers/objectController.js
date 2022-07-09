const db = require("../models/index");

// Main Model
const Object = db.objects;

module.exports = {
	add: async (req, res) => {
		let data = {
			name: req.body.name,
			type: req.body.type,
		};

		const object = await Object.create(data);
		res.status(200).send(object);
	},
	list: async (req, res) => {
		let objects = await Object.findAll({});
		res.status(200).send(objects);
	},
	getById: async (req, res) => {
		let id = req.params.id;
		let object = await Object.findOne({
			where: { id: id },
		});
		res.status(200).send(object);
	},
	update: async (req, res) => {
		let id = req.params.id;
		let object = await Object.update(req.body, {
			where: { id: id },
		});
		res.status(200).send(object);
	},
	delete: async (req, res) => {
		let id = req.params.id;
		await Object.destroy({
			where: { id: id },
		});
		res.status(200).send(`Object with id=${id} is deleted`);
	},
};
