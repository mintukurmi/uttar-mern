const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// dot env
dotenv.config();
// cross origin
app.use(cors());

// bodyParser config
app.use(express.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(express.json()); // parse application/json

// connect to database
require("./configs/database/mongoose");

const PORT = process.env.PORT || 5000;

app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));

// routes
const indexRoutes = require("./routes/index.route");
const postRoutes = require("./routes/post.route");
const commentRoutes = require("./routes/comment.route");

app.use("/", indexRoutes);
app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);

app.listen(PORT, () => {
    console.log("Server running or port " + PORT);
});

// process.on("uncaughtException", (err, origin) => {
//     console.log("error", err);
//     console.log("origin", origin);
// });
