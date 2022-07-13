const express = require("express");
const cors = require("cors");
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express');
const app = express();

let corsOptions = {
	origin: "http://localhost:8000",
};

// Swagger Définition
var swaggerDefinition = {
	info: {
	  title: 'Node Swagger API',
	  version: '1.0.0',
	  description: 'JARVIS API documentations',
	},
	host: 'localhost:5000',
	basePath: '/api/v1',
  };
// options for the swagger docs
var options = {
	// Explorer Bar
	explorer: true,
	// import swaggerDefinitions
	swaggerDefinition: swaggerDefinition,
	// path to the API docs
	apis: ['./routes/*.js','./models/*.js'],
  };

// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);
// serve swagger
app.use('/api/v1/documentations', swaggerUi.serve, swaggerUi.setup(swaggerSpec));  
  


// middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'ejs');




// ROUTE
const objectRouter = require("./routes/objectRoute");
const pieceRouter = require("./routes/pieceRoute");
const userRouter = require("./routes/userRoute");
const docsRouter = require('./routes/docsRoute')
const authRouter = require('./routes/authRoute')

app.use('/',docsRouter)
app.use('/',authRouter)
app.use("/api/v1/object", objectRouter);
app.use("/api/v1/piece", pieceRouter);
app.use("/api/v1/user", userRouter);

// SERVER
const PORT = process.env.PORT || "5000";
app.listen(PORT, () => {
	console.log(`SERVER LISENT ON ${PORT}`);
});
