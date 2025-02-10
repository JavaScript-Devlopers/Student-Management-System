"use strict";

require("dotenv").config();
const express = require("express");
const mongoConnection = require("./App/Connections/mongo_connection");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




const corsOpts = {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["x-access-token", "Origin", "Content-Type", "Accept", "Authorization"],
};
app.use(cors(corsOpts));




require("./App/Routes")(app);

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://0.0.0.0:${PORT}`);
});
