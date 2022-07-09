const express = require("express");
const cors = require("cors");

const app = express();

let corsOptions = {
	origin: "http://localhost:8000",
};

// middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTE

const objectRouter = require("./routes/objectRoute");
const pieceRouter = require("./routes/pieceRoute");
const userRouter = require("./routes/userRoute");

app.use("/api/v1/object", objectRouter);
app.use("/api/v1/piece", pieceRouter);
app.use("/api/v1/user", userRouter);


// SERVER
const PORT = process.env.PORT || "5000";
app.listen(PORT, () => {
	console.log(`SERVER LISENT ON ${PORT}`);
});
