require("dotenv").config();
const PORT=process.env.PORT;
const express = require("express");
const cors = require("cors");
const app = express();
const {expressjwt:jwt} = require('express-jwt')


const { HOST_URL} = process.env;
const corsOptions = {
	origin: `${HOST_URL}`,
};

// middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(jwt({secret:process.env.JWTSECRET,algorithms:['SH256']}).unless({path:['/','/register','/login','/logout']}));
app.use("/public",express.static('public'))
app.set("views", "./src/Views");
app.set("view engine", "ejs");

// Importing routers
const objectRouter = require("./src/Routers/objectRoute");
const pieceRouter = require("./src/Routers/pieceRoute");
const userRouter = require("./src/Routers/userRoute");
const docsRouter = require("./src/Routers/docsRoute");
const authRouter = require("./src/Routers/authRoute");

// Register routers
app.use("/", docsRouter);
app.use("/", authRouter);
app.use("/api/v1/object", objectRouter);
app.use("/api/v1/piece", pieceRouter);
app.use("/api/v1/user", userRouter);


// Server
app.listen(PORT, () => {
	console.log(`Server started on ${PORT}`);
});

