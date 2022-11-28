const mongoose = require('mongoose')
const re = require('../constants').re
var AuthSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: 'Required',
    min: [4, 'must me atlest 4 characters, got {value}'],
    max: 20,
    trim: true,
    validate: {
      validator: (val) => re.isAlpha.test(val),
      message: 'No special characters allowed',
    },
  },
  userId: {
    type: String,
    required: 'Required',
    min: [8, 'must me atlest 4 characters, got {value}'],
    max: 20,
    trim: true,
  },
  password: {
    type: String,
    required: 'Required',
    min: [8, 'must me atlest 4 characters, got {value}'],
    max: 20,
  },
  designation: {
    type: String,
    required: 'Required',
    enum: ['admin', 'teacher', 'tranporter', 'hr', 'student', 'super admin'],
  },
  createdBy: {
    type: String,
    required: 'Required',
    min: [8, 'must me atlest 4 characters, got {value}'],
    max: 20,
  },
})

module.exports = mongoose.model('authCreate', AuthSchema)
