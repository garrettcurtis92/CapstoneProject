const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  specialty: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  image: {
    type: String
  }
});

const User = mongoose.model("User", usersSchema);

module.exports = User;
