const express = require('express')
const routerStaff = express.Router()
const utils = require('../utils')
const staff = require('../controllers/staff')
const {
  apiRoutes: { staffApi },
} = require('../constants')

routerStaff.post(staffApi.add, utils.authenTicateToken, staff.staffAdd)
routerStaff.post(
  staffApi.caricullam,
  utils.authenTicateToken,
  staff.staffCaricullamAdd
)
module.exports = routerStaff
