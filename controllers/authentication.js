const jwt = require('jsonwebtoken')
const authSchema = require('../model/auth.model')
const env = require('../helper')

const singUp = async (req, res) => {
  try {
    const formData = req.body
    const createUser = new authSchema(formData)
    await createUser.save()
    res.send('user added')
  } catch (err) {
    console.log(err)
    res.send(err)
  }
}

const singIn = async (req, res) => {
  try {
    const { userId, password } = req.body
    authSchema
      .findOne({ userId, password })
      .lean()
      .exec(function (err, data) {
        if (!err && data) {
          const jtwToken = jwt.sign(
            { userId: userId, designation: data.designation },
            env.jwtSecret,
            {
              expiresIn: '30m',
            }
          )
          res.send(jtwToken)
        } else {
          res.send('User not found')
        }
      })
  } catch (err) {
    res.send(err)
  }
}

const deleteUser = async (req, res) => {
  try {
    const { userId } = req.body
    authSchema.remove({ userId })
    res.send('deleted')
  } catch (error) {
    res.send(error.toString())
  }
}

const tokenTest = async (req, res) => {
  res.send('working')
}

module.exports = { singUp, singIn, deleteUser }
