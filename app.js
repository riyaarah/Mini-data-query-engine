const express = require("express");
const queryRoutes = require("./queryRoutes");
const authMiddleware = require("./authMiddleware");
require("dotenv").config();

const app = express();
app.use(express.json());

// Secure all routes with API key middleware
app.use(authMiddleware);
app.use("/api", queryRoutes);

module.exports = app;


