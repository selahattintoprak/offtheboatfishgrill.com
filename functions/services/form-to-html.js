exports.format = function(fields) {
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
};
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
