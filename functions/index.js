const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });
admin.initializeApp();

/**
 * Here we're using Gmail to send
 */
const senderEmail = "isquadrepair@gmail.com";
const senderName = "iSquad Repair";

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "login",
    user: senderEmail,
    pass: functions.config().gmail.password,
  },
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const origin = req.headers.origin || req.headers.host || req.protocol + "://" + req.headers.host;
    res.setHeader("Content-type", "application/json");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Expose-Headers", "AMP-Access-Control-Allow-Source-Origin, AMP-Redirect-To, Accept");
    //res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE')
    //res.setHeader('AMP-Redirect-To', origin + '/thankyou.html');
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("AMP-Access-Control-Allow-Source-Origin", origin);
    console.log("pass",functions.config().gmail.password)
    // getting dest email by query string
    const body = req.body;
    const { html, text } = format(body);
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

    // returning result
    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.send(erro.toString());
      }
      return res.send("Sended");
    });
  });
});

function format(fields) {
  const { name, address, zipCode, email, phone, date, time, deviceType, location, message } = fields;
  const html = `<div>
                    <h4>Information</h4>
                    <ul>
                    <li>
                        Name - ${name || ""}
                    </li>
                    <li>
                        Email - ${email || ""}
                    </li>
                    <li>
                        Phone - ${phone || ""}
                    </li>
                    <li>
                        Date - ${date || ""}
                    </li>
                    <li>
                        Time - ${time24To12(time) || ""}
                    </li>
                    <li>
                        Device Type - ${deviceType || ""}
                    </li>
                    <li>
                    ${location ? "Location" : "Address"} - ${location || address}
                    </li>
                    ${zipCode ? "<li> Zip Code - " + zipCode + "</li>" : ""}
                    </ul>
                    <h4>Message</h4>
                    <p>${message || ""}</p>
                </div>`;
  const text = `Name - ${name}
                Email - ${email}
                Phone - ${phone}
                Date - ${date}
                Time - ${time}
                Device Type - ${deviceType}
                Location - ${location} 
                Message - ${message}`;
  return { html, text };
}
function time24To12(value) {
  return new Date("1955-11-05T" + value + "Z").toLocaleTimeString("bestfit", {
    timeZone: "UTC",
    hour12: !0,
    hour: "numeric",
    minute: "numeric",
  });
}
function reverseDigitIn(str) {
  return str
    .split("-")
    .reverse()
    .join("/");
}
