
"use strict";

require('dotenv').config();
const mongoConnection = require('./App/Connections/mongo_connection');
const express = require("express");
const app = express();
const http = require('http');
const https = require('https');
const fs = require('fs');
const cors = require('cors');
const bodyparser = require('body-parser');



// Setting up CORS options
const corsOpts = {
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: [
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept", "authorization",
    ],
};
app.use(cors(corsOpts));



// // Importing routes
// require("./App/Routes")(app);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://0.0.0.0:${process.env.PORT}`);
});
