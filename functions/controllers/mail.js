//import * as functions from "firebase-functions";
const functions = require("firebase-functions");
//import { FormToHtml, NodeMailer } from "../services/services";
const { FormToHtml, NodeMailer } = require("../services/services");

const senderEmail = "isquadrepair@gmail.com";
const senderName = "iSquad Repair";

exports.sendMail = (req, res) => {
  console.log("pass", functions.config().gmail.password);
  // getting dest email by query string
  const body = req.body;
  console.log("body", req);
  const { html, text } = FormToHtml.format(body);
  const { email: receiverEmail, location = "" } = body;
  let appointmentType = location ? "Walk-in" : "Mobile";
  let sender = `${senderName}${location && ` (${location})`}`;
  let subject = `${sender} ${appointmentType} Appointment`;
  let from = `${sender} <${senderEmail}>`;

  let thankYouHtml = `
      <p>Thank you for scheduling a ${
        location ? "Walk-in" : "Mobile"
      } repair appointment. A technician will call you to confirm your appointment.</p>
      <p>If you have any questions, please visit <a href="https://cellphonerepairtemecula.com">Cell Phone Repair Temecula</a> website.</p>
      ${html}
      `;
  const mailOptions = {
    sender: senderEmail,
    from, // Something like: Jane Doe <janedoe@gmail.com>
    to: receiverEmail,
    replyTo: senderEmail,
    subject,
    html: thankYouHtml,
    text: thankYouHtml.replace(/(<([^>]+)>)/gi, ""),
  };
  NodeMailer.sendMail(mailOptions, res);
};
