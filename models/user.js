const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  updatedDate: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('user', userSchema)