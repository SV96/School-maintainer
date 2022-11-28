const jwt = require('jsonwebtoken')
const env = require('./helper')
const jwt_decode = require('jwt-decode')
const { accessiableApi } = require('./constants')

function tokenAccess(token, req, res, userInfo, next) {
  const tokenDecoded = jwt_decode(token.toString())
  const tokenCheck = accessiableApi[tokenDecoded.designation].includes(req.url)
  if (tokenCheck) {
    req.userId = userInfo.userId
    next()
  } else {
    res.status(401).send('Not authorized to do this')
  }
}

function authenTicateToken(req, res, next) {
  try {
    const authHeader = req.headers.authorization
    !authHeader && res.send({ error: 'auth token required' })
    const token = authHeader.split(' ')[1]
    jwt.verify(token, env.jwtSecret, (err, userInfo) => {
      if (err) {
        return res.status(403).send(err)
      } else {
        tokenAccess(token, req, res, userInfo, next)
      }
    })
  } catch (err) {
    res.send(err)
  }
}

// "student", "staff", "stationary", "tranportation", "misellenious"
function createReciptNumber(
  department,
  studentStandard = '',
  studentGrNo = ''
) {
  switch (true) {
    case department === 'student':
      return `SU${studentStandard}${studentGrNo}`
    case department === 'staff':
      return `SA`
    case department === 'stationary':
      return `SY`
    case department === 'tranportation':
      return 'TR'
    case department === 'misellenious':
      return `MI`
    default:
      return 'RECPTs'
  }
}

module.exports = { authenTicateToken, createReciptNumber }
