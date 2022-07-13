"use strict";
const { Model } = require("sequelize");
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
				unique:true,
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
			date_naissance:{
				type:DataTypes.DATEONLY,
				allowNull:false,
			},
			role:{
				type:DataTypes.ENUM('Tuteur','Enfant','Admin'),
				defaultValue:'Tuteur',
				allowNull:false
			},
			sexe:{
				type:DataTypes.ENUM('Femme','Homm'),
				defaultValue:'Femme',
				allowNull:false
			}
		},
		{
			sequelize,
			modelName: "User",
			timestamps: true,
			createdAt: true,
		}
	);
	return User;
};
