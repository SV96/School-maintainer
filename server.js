// import section *********************************************************************
require('dotenv').config()
const express = require('express')
const env = require('./helper')
const router = require('./router/routerOauth')
const connection = require('./model')
const routerAccounts = require('./router/routerAccounts')
const routerStaff = require('./router/staffRouter')
const routerAttendence = require('./router/attendenceRouter')
const studentRouter = require('./router/studentRouter')

// decleration section ****************************************************************
const app = express()
app.use(express.json())

// route section **********************************************************************
app.use('/oAuth', router)
app.use('/accouts', routerAccounts)
app.use('/staff', routerStaff)
app.use('/attendence', routerAttendence)
app.use('/student', studentRouter)

// app listen section *****************************************************************
app.listen(env.nodePort, function () {
  console.log(`App is running on ${env.nodePort}`)
})
