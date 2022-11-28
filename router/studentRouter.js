const express = require('express')
const studentRouter = express.Router()
const studentController = require('../controllers/students')
const utils = require('../utils')
const {
  apiRoutes: { studentApi },
} = require('../constants')

studentRouter.post(
  studentApi.add,
  utils.authenTicateToken,
  studentController.studentAdd
)

studentRouter.post(
  studentApi.performance,
  utils.authenTicateToken,
  studentController.studentPerformance
)

studentRouter.post(
  studentApi.parentInfo,
  utils.authenTicateToken,
  studentController.studentParents
)

module.exports = studentRouter
