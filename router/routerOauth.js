const express = require('express')
const router = express.Router()
const env = require('../helper')
const auth = require('../controllers/authentication')
const account = require('../controllers/accounts')
const utils = require('../utils')
const {
  apiRoutes: { oAuthApi },
} = require('../constants')

router.post(oAuthApi.signUp, auth.singUp)
router.post(oAuthApi.signIn, auth.singIn)
router.delete(oAuthApi.deleteUse, utils.authenTicateToken, auth.deleteUser)

module.exports = router
