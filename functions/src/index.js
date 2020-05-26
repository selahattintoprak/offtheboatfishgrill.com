const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const bodyParser = require("body-parser");

const { corsMiddleware, busboyMiddleware } = require("./middlewares/middlewares");

const { mailRoutes } = require("./routes/routes");

//const cors = require("cors")({ origin: true });
admin.initializeApp();

/**
 * Here we're using Gmail to send
 */
const app = express();
//app.use(cors());
app.use(corsMiddleware);
app.use(busboyMiddleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/v1/mail", mailRoutes);

exports.api = functions.https.onRequest(app);
