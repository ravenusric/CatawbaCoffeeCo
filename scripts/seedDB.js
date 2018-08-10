const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/submissiondb"
);

const submissionSeed = [
  {
    firstName: "Dave",
    lastName: "King",
    email:
      "dave@gmail.com",
    text: "My name is Dave"
  },
  {
    firstName: "John",
    lastName: "William Golding",
    email:
      "john@gmail.com",
    text: "My name is Joh "
  }
];

db.Submission
  .post({})
  .then(() => db.Submission.collection.insertMany(submissionSeed))
  .then(data => {
    console.log(data.result.db + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
