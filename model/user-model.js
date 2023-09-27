const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  chatID: {
    type: [String],
    required: true,
    default: []
  }
},
{ versionKey: false}
);

const User = mongoose.model('User', UserSchema);

module.exports = { User };