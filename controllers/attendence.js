const attendenceSchema = require('../model/attendence.model')
const StaffInfo = require('../model/staffInfo.model')
const moment = require('moment')

const attendenceController = async (req, res, next) => {
  try {
    const attendee = req.body
    const data = await attendenceSchema.findOne({
      userID: req.body.userID,
      date: moment(new Date()).format('DD/MM/YYYY'),
    })
    const dataStaff = await StaffInfo.findOne({ _id: req.body.userID })
    let msg
    if (data == null) {
      const userID = dataStaff._id
      const attendeeData = new attendenceSchema({ ...attendee, userID })
      await attendeeData.save()
      msg = 'marked present'
    } else {
      msg = 'already marked present'
    }
    res.send(msg)
  } catch (error) {
    res.send(error.toString())
  }
}

const attendenceStudentController = async (req, res, next) => {
  try {
    const attendee = req.body
    const data = await attendenceSchema.findOne({
      studentID: req.body.studentID,
      date: moment(new Date()).format('DD/MM/YYYY'),
    })
    let msg
    if (data == null) {
      const studentID = req.body.studentID
      const attendeeData = new attendenceSchema({ ...attendee, studentID })
      await attendeeData.save()
      msg = 'marked present'
    } else {
      msg = 'already marked present'
    }
    res.send(msg)
  } catch (error) {
    res.send(error.toString())
  }
}

const searchAttendeAttendece = async (req, res, next) => {
  try {
    const data = await attendenceSchema
      .find({ userID: req.body.userID })
      .populate({
        path: req.body.userID ? 'userID' : 'studentID',
        select: 'name',
      })
    res.status(200).json({ data: data, success: true })
  } catch (error) {
    res.send(error.toString())
  }
}

module.exports = {
  attendenceController,
  searchAttendeAttendece,
  attendenceStudentController,
}
