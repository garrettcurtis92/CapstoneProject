const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  Specialty: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const Result = mongoose.model("Result", usersSchema);

module.exports = Result;
