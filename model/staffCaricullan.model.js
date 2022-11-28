const mongoose = require('mongoose')
const re = require('../constants').re
const Schema = require('mongoose').Schema

const staffCaricullamSchema = new mongoose.Schema({
  staffId: {
    type: Schema.Types.ObjectId,
    ref: 'staffInfo',
    required: 'Required',
  },
  subject: {
    type: String,
    enum: [
      'English',
      'Maths',
      'Science',
      'Hindi',
      'Grammer',
      'General knowledge',
      'Social science',
      'PT',
    ],
    required: 'Required',
  },
  standard: {
    type: String,
    required: 'Required',
    enum: [
      'Nursery',
      'JR KG',
      'SR KG',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
    ],
  },
  day: {
    type: String,
    required: 'Required',
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
  slot: {
    type: String,
    required: 'Required',
    enum: [1, 2, 3, 4, 5, 6, 7, 8],
  },
})

module.exports = mongoose.model('staffCaricullam', staffCaricullamSchema)
