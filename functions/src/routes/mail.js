//const express = require("express");
const express = require("express");
const { MailController } = require("../controllers/controllers");

const router = express.Router();

router.post("/send", MailController.sendMail);

module.exports = router;
