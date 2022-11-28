const mongoose = require('mongoose')
const Schema = require('mongoose').Schema
const re = require('../constants')

const studentInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'required',
    validate: re.validators.checkAlpha,
  },
  age: {
    type: Number,
    required: 'required',
  },
  standard: {
    type: String,
    required: 'required',
  },
  grNo: {
    type: String,
    required: 'required',
  },
  rollNo: {
    type: Number,
    required: 'required',
  },
  parentsName: {
    type: String,
    required: 'required',
  },
  contactNo: {
    type: Number,
    required: 'Required',
    trim: true,
    validate: re.validators.checkMobileNum,
  },
  address: {
    type: String,
    required: 'required',
  },
})

const studentPerformanceInfo = new mongoose.Schema({
  studentId: {
    type: Schema.Types.ObjectId,
    ref: 'studentAdd',
    required: 'required',
  },
  term: {
    type: String,
    enum: ['start', 'mid', 'end'],
    required: 'required',
    validate: re.validators.checkAlpha,
  },
  result: [
    {
      subject: {
        type: String,
        enum: [
          'english',
          'maths',
          'science',
          'hindi',
          'grammer',
          'general knowledge',
          'social science',
          'pt',
        ],
        required: 'Required',
      },
      marks: {
        type: Number,
        required: 'required',
        validate: re.validators.checkMarks,
      },
    },
  ],
  rank: {
    type: Number,
    required: 'required',
  },
  achivement: [
    {
      type: String,
      validate: re.validators.checkAlpha,
    },
  ],
  notes: [
    {
      type: String,
      validate: re.validators.checkAlphaNum,
    },
  ],
})

const studentParentsInfo = new mongoose.Schema({
  studentId: {
    type: Schema.Types.ObjectId,
    ref: 'studentAdd',
    required: 'required',
  },
  senderName: {
    type: String,
    required: 'required',
    validate: re.validators.checkAlpha,
  },
  actionDate: {
    type: Date,
    required: 'required',
  },
  info: {
    type: String,
    required: 'required',
    validate: re.validators.checkAlpha,
  },
  actionTaken: {
    type: Boolean,
    default: false,
  },
})

const studentAdd = mongoose.model('studentAdd', studentInfoSchema)
const studentPerformance = mongoose.model(
  'studentPerformance',
  studentPerformanceInfo
)
const studentParents = mongoose.model('studentParents', studentParentsInfo)

module.exports = { studentAdd, studentPerformance, studentParents }
