const studentSchema = require('../model/student.model')
const studentAdd = async (req, res, next) => {
  try {
    const createStudent = new studentSchema.studentAdd(req.body)
    await createStudent.save()
    res.send('Student saved')
  } catch (error) {
    res.send(error.toString())
  }
}

const studentPerformance = async (req, res, next) => {
  try {
    const studentPerformanceAdd = new studentSchema.studentPerformance(req.body)
    await studentPerformanceAdd.save()
    res.send('peroformance added')
  } catch (error) {
    res.send(error.toString())
  }
}

const studentParents = async (req, res, next) => {
  try {
    const studentParentsInfoAdd = new studentSchema.studentParents(req.body)
    await studentParentsInfoAdd.save()
    res.send('parents info added')
  } catch (error) {
    res.send(error.toString())
  }
}

module.exports = { studentAdd, studentPerformance, studentParents }
