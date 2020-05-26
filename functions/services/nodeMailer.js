//const nodemailer = require("nodemailer");
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

const senderEmail = "isquadrepair@gmail.com";

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "login",
    user: senderEmail,
    pass: functions.config().gmail.password,
  },
});

exports.sendMail = (mailOptions, res) => {
  // returning result
  return transporter.sendMail(mailOptions, (erro, info) => {
    if (erro) {
      return res.send(erro.toString());
    }
    return res.send("Sended");
  });
};
