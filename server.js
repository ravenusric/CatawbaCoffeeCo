const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const logger = require("morgan");
const app = express();
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Using Morgan to log API calls
app.use(logger("dev"));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build/"));
} else {
  app.use(express.static("./client/public/"));
}
// Add routes, both API and view
app.post("/api/submissions", (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    if (err) {
      console.error("Failed to create a testing account. " + err.message);
      return process.exit(1);
    }

    console.log("Credentials obtained, sending message...");

    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      // port: 587,
      port: 465,
      secure: true,
      auth: {
        user: "katawbatestemail@gmail.com",
        pass: "katawbaemail"
      }
    });

    // Message object
    let message = {
      from: req.body.email,
      to: "katawbatestemail@gmail.com",
      subject: "Customer Feedback",
      text: req.body.email + " Thanks you! \n" + req.body.text
    };
    let confirmationMessage = {
      from: "katawbatestemail@gmail.com",
      to: req.body.email,
      subject: "Feedback Confirmation",
      text: "Thank you for contacting Catawba Coffee Co!"
    };

    transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log("Error occurred. " + err.message);
        return process.exit(1);
      }
      console.log("Message sent: %s", info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
    transporter.sendMail(confirmationMessage, (err, info) => {
      if (err) {
        console.log("Error occurred. " + err.message);
        return process.exit(1);
      }
      console.log("Message sent: %s", info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
});

// app.use(routes);
app.use(routes);

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/submissiondb";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
