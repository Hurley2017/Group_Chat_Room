const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
  adminID: {
    type: String,
    required: true,
    unique: true
  },
  ArrayUSER: {
    type: [String],
    required: true,
    default: [],
  },
  chatData: {
    type: [String],
    required: true,
    default: [],
  },
},
{ versionKey: false}
);

const Chat = mongoose.model('Chat', ChatSchema);

module.exports = { Chat };