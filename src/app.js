const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user")

const app = express();

// Configure express to automatically parse the request body
app.use(express.json());

// Register routers
app.use(userRouter);

module.exports = app;
