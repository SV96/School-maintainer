const mongoose = require('mongoose')
const Schema = require('mongoose').Schema
const moment = require('moment')

const attendenceSchema = new mongoose.Schema({
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'staffInfo',
  },
  studentID: {
    type: Schema.Types.ObjectId,
    ref: 'studentAdd',
  },
  date: {
    type: String,
    default: moment(new Date()).format('DD/MM/YYYY'),
  },
  persent: {
    type: Boolean,
    default: true,
  },
  attendenceType: {
    type: String,
    default: this.userID ? 'staff' : 'student',
  },
})

module.exports = mongoose.model('attendence', attendenceSchema)
