const express = require('express')
const routerAccounts = express.Router()
const env = require('../helper')
const auth = require('../controllers/authentication')
const account = require('../controllers/accounts')
const utils = require('../utils')
const {
  apiRoutes: { accountsApi },
} = require('../constants')

routerAccounts.post(
  accountsApi.entries,
  utils.authenTicateToken,
  account.accountsEntries
)

module.exports = routerAccounts
