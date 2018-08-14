const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const logger = require("morgan");
const app = express();
const sgMail = require("@sendgrid/mail");
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
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: req.body.email,
    from: "katawbatestemail@gmail.com",
    subject: "Customer Feedback",
    text: "Thank you for contacting Catawba Coffee Co!"
  };
  const confirmsg = {
    to: "katawbatestemail@gmail.com",
    from: req.body.email,
    subject: "Customer Feedback",
    text: req.body.text
  };
  sgMail.send(msg);
  sgMail.send(confirmsg);
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
