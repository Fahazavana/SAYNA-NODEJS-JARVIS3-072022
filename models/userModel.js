"use strict";
const { Model } = require("sequelize");
const UIDGenerator = require("uid-generator");
const uidgen = new UIDGenerator(56).bitSize;
const bcrypt = require("bcrypt");
const saltRounds = 10;
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	User.init(
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
			},
			firstname: {
				type: DataTypes.STRING(25),
				allowNull: false,
				validate: {
					len: {
						args: [2, 25],
						msg: "Longeur Invalide",
					},
				},
			},
			lastname: {
				type: DataTypes.STRING(25),
				allowNull: false,
				validate: {
					len: {
						args: [2, 25],
						msg: "Longeur Invalide",
					},
				},
			},
			email: {
				type: DataTypes.STRING(150),
				allowNull: false,
				validate: {
					len: {
						args: [10, 150],
						msg: "Invalid length",
					},
					isEmail: {
						msg: "Adresse email invalide",
					},
				},
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			token: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "User",
			timestamps: true,
			createdAt: true,
			hooks: {
				beforeCreate: async (User) => {
					uidgen.generate().then((uid) => {
						User.token = uid;
					});

					if (User.password) {
						const salt = await bcrypt.genSaltSync(saltRounds, "a");
						User.password = bcrypt.hashSync(User.password, salt);
					}
				},
			},
			instanceMethods: {
				passwordCheck(password) {
					return bcrypt.compare(password, this.password);
				},
			},
		}
	);
	return User;
};
