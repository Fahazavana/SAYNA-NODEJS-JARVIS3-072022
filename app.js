require("dotenv").config();
const PORT=process.env.PORT;
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const corsOptions = require("./config/corsOptions");
const authenticateToken = require("./src/Middleware/tokenVerify");

// middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));
app.set("views", "./src/Views");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname + "/public")));

// Importing routers
const objectRouter = require("./src/Routers/objectRoute");
const pieceRouter = require("./src/Routers/pieceRoute");
const userRouter = require("./src/Routers/userRoute");
const docsRouter = require("./src/Routers/docsRoute");
const authRouter = require("./src/Routers/authRoute");

// Register routers
app.use("/", docsRouter);
app.use("/api/v1", authRouter);
app.use("/api/v1/object", authenticateToken, objectRouter);
app.use("/api/v1/piece", authenticateToken, pieceRouter);
app.use("/api/v1/user", authenticateToken, userRouter);


// Server
app.listen(PORT, () => {
	console.log(`Server started on ${PORT}`);
});

