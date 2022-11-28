const express = require('express')
const routerAttendence = express.Router()
const utils = require('../utils')
const attendee = require('../controllers/attendence')
const {
  apiRoutes: { attendenceApi },
} = require('../constants')

routerAttendence.post(
  attendenceApi.staff,
  utils.authenTicateToken,
  attendee.attendenceController
)

routerAttendence.post(
  attendenceApi.search,
  utils.authenTicateToken,
  attendee.searchAttendeAttendece
)

routerAttendence.post(
  attendenceApi.student,
  utils.authenTicateToken,
  attendee.attendenceStudentController
)

module.exports = routerAttendence
