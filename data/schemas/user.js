var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: String,
  name: String,
  password: String,
  bio: String
});

module.exports = UserSchema;