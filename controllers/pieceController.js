const db = require("../models");

// Main Model
const Piece = db.pieces;

module.exports = {
	add: async (req, res) => {
		let data = {
			name: req.body.name,
			cover: req.body.cover,
		};

		const piece = await Piece.create(data);
		res.status(200).send(piece);
	},
	list: async (req, res) => {
		let pieces = await Piece.findAll({});
		res.status(200).send(pieces);
	},
	getById: async (req, res) => {
		let id = req.params.id;
		let piece = await Piece.findOne({
			where: { id: id },
		});
		res.status(200).send(piece);
	},
	update: async (req, res) => {
		let id = req.params.id;
		let piece = await Piece.update(req.body, {
			where: { id: id },
		});
		res.status(200).send(piece);
	},
	delete: async (req, res) => {
		let id = req.params.id;
		await Piece.destroy({
			where: { id: id },
		});
		res.status(200).send(`Piece with id=${id} is deleted`);
	},
};
