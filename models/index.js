const dbconf = require("../config/db");


const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbconf.DB, dbconf.USER, dbconf.PASSWORD, {
	host: dbconf.HOST,
	dialect: dbconf.dialect
});

sequelize
	.authenticate()
	.then(() => {
		console.log("Connected");
	})
	.catch((err) => {
		console.log("Error: " + err);
	});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./userModel.js")(sequelize, DataTypes);
db.pieces = require("./pieceModel.js")(sequelize, DataTypes);
db.objects = require("./objectModel.js")(sequelize, DataTypes);

db.sequelize.sync({alter:false}).then(()=>{
	console.log("re-sync: done!");
}).catch(err=>{
	console.log(err)
});

module.exports=db